/*
 * @jest-environment jsdom
 */
import {jest} from '@jest/globals'
import { 
  ExtensionProvider, 
} from './ExtensionProvider';
import {
  MessageFromManager,
  ProviderMessage,
  ProviderMessageData,
  ExtensionMessageData,
  extension
} from '@substrate/connect-extension-protocol';

const waitForMessageToBePosted = (): Promise<null> => {
  // window.postMessge is async so we must do a short setTimeout to yield to
  // the event loop
  return new Promise(resolve => setTimeout(resolve, 10, null));
}

let handler = jest.fn();
beforeEach(() => {
  handler = jest.fn();
  extension.listen(handler);
});

afterEach(() => {
  window.removeEventListener('message', handler);
});

test('constructor sets properties', () => {
  const ep = new ExtensionProvider('test', 'kusama');
  expect(ep.name).toBe('test');
  expect(ep.chainName).toBe('kusama');
});

test('connected and sends correct spec message', async () => {
  const ep = new ExtensionProvider('test', 'westend');
  const emitted = jest.fn();
  ep.on('connected', emitted);
  await ep.connect();
  await waitForMessageToBePosted();

  const expectedMessage: ProviderMessageData = {
    appName: 'test',
    chainName: 'westend',
    action: 'forward',
    origin: 'extension-provider',
    message: {
      payload: "",
      relayChainName: "",
      type: "spec"
    }  
  };
  expect(handler).toHaveBeenCalledTimes(2);
  const { data } = handler.mock.calls[1][0] as ProviderMessage;
  expect(data).toEqual(expectedMessage);
});

test('constructor sets properties for parachain', () => {
  const ep = new ExtensionProvider('test', 'westmint', 'westmint-specs', 'westend');
  expect(ep.name).toBe('test');
  expect(ep.chainName).toBe('westmint');
  expect(ep.chainSpecs).toBe('westmint-specs');
  expect(ep.chainName).toBe('westmint');
});

test('connected parachain sends correct spec message', async () => {
  const ep = new ExtensionProvider('test', 'westmint', 'westmint-specs', 'westend');
  const emitted = jest.fn();
  ep.on('connected', emitted);
  await ep.connect();
  await waitForMessageToBePosted();

  const expectedMessage: ProviderMessageData = {
    appName: 'test',
    chainName: 'westmint',
    action: 'forward',
    origin: 'extension-provider',
    message: {
      payload: "westmint-specs",
      relayChainName: "westend",
      type: "spec"
    }  
  };
  expect(handler).toHaveBeenCalledTimes(2);
  const { data } = handler.mock.calls[1][0] as ProviderMessage;
  expect(data).toEqual(expectedMessage);
});

test('connect sends connect message and emits connected', async () => {
  const ep = new ExtensionProvider('test', 'test-chain');
  await ep.connect();
  await waitForMessageToBePosted();

  const expectedMessage: ProviderMessageData = {
    appName: 'test',
    chainName: 'test-chain',
    action: 'connect',
    origin: 'extension-provider'
  };
  expect(handler).toHaveBeenCalledTimes(2);
  const { data } = handler.mock.calls[0][0] as ProviderMessage;
  expect(data).toEqual(expectedMessage);
});

test('disconnect sends disconnect message and emits disconnected', async () => {
  const ep = new ExtensionProvider('test', 'test-chain');
  const emitted = jest.fn();
  await ep.connect();

  ep.on('disconnected', emitted);
  void ep.disconnect();
  await waitForMessageToBePosted();

  const expectedMessage: ProviderMessageData = {
    appName: 'test',
    chainName: 'test-chain',
    action: 'disconnect',
    origin: 'extension-provider'
  };
  expect(handler).toHaveBeenCalledTimes(3);
  const { data } = handler.mock.calls[2][0] as ProviderMessage;
  expect(data).toEqual(expectedMessage);
  expect(ep.isConnected).toBe(false);
  expect(emitted).toHaveBeenCalledTimes(1);
});

test('disconnects and emits disconnected when it receives a disconnect message', async () => {
  const ep = new ExtensionProvider('test', 'test-chain');
  const emitted = jest.fn();
  await ep.connect();

  ep.on('disconnected', emitted);
  await waitForMessageToBePosted();
  extension.send({
    origin: 'content-script',
    disconnect: true
  });
  await waitForMessageToBePosted();
  expect(emitted).toHaveBeenCalled();
  expect(ep.isConnected).toBe(false);
});

test('emits error when it receives an error message', async () => {
  const ep = new ExtensionProvider('test', 'test-chain');
  await ep.connect();
  await waitForMessageToBePosted();
  const errorMessage: ExtensionMessageData = {
    origin: 'content-script',
    message: {
      type: 'error',
      payload: 'Boom!'
    }
  };
  const errorHandler = jest.fn();
  ep.on('error', errorHandler);
  window.postMessage(errorMessage, '*');
  await waitForMessageToBePosted();

  expect(errorHandler).toHaveBeenCalled();
  const error = errorHandler.mock.calls[0][0] as Error;
  const innerMessage = errorMessage.message as MessageFromManager;
  expect(error.message).toEqual(innerMessage.payload);
});
