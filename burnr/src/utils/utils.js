import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import { mnemonicGenerate } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/api';
const keyring = new Keyring({ type: 'sr25519' });
const config = {
    dictionaries: [starWars]
};
export const getName = (account) => `${account.name}`;
export const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow)
        newWindow.opener = null;
};
export const downloadFile = (fileName, data, type) => {
    const anchor = window.document.createElement('a');
    anchor.href = window.URL.createObjectURL(new Blob([data], { type: `application/${type}` }));
    anchor.download = `${type === 'txt' ? 'seedphrase-' : ''}${fileName}.${type}`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
};
export const createLocalStorageAccount = () => {
    const mnemonic = mnemonicGenerate(12);
    const pair = keyring.addFromMnemonic(mnemonic, { name: uniqueNamesGenerator(config) }, 'sr25519');
    return {
        userAddress: pair.address,
        userName: pair.meta.name || '____ _____',
        userSeed: mnemonic,
        // eslint-disable-next-line @typescript-eslint/unbound-method
        userJson: pair.toJson,
        userHistory: []
    };
};
export const isEmpty = (obj) => ((typeof obj === 'object' && obj !== null) && Object.keys(obj).length === 0 && obj.constructor === Object);
export const copyToClipboard = (text) => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
};
export const getKeyring = () => keyring;
export const transformCurrency = (currencyLevel, currency) => (currencyLevel !== '-') ? currencyLevel.concat(currency) : currency;
//# sourceMappingURL=utils.js.map