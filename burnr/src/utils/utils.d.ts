import { Account, LocalStorageAccountCtx } from './types';
import { Keyring } from '@polkadot/api';
export declare const getName: (account: Account) => string;
export declare const openInNewTab: (url: string) => void;
export declare const downloadFile: (fileName: string, data: string, type: string) => void;
export declare const createLocalStorageAccount: () => LocalStorageAccountCtx;
export declare const isEmpty: (obj: unknown) => boolean;
export declare const copyToClipboard: (text: string) => void;
export declare const getKeyring: () => Keyring;
export declare const transformCurrency: (currencyLevel: string, currency: string) => string;
//# sourceMappingURL=utils.d.ts.map