import { LazyProvider } from './types';
/**
 * Temporary hard-coded work around to test Wasm Light client
 * until \@substrate/connect is properly implemented
 */
export declare const endpoints: {
    kusama: string;
    polkadot: string;
    westend: string;
    localPolkadotNetwork: string;
    local: string;
};
export declare const POLKA_ACCOUNT_ENDPOINTS: {
    polkascan: string;
    polkastats: string;
};
export declare const users: {
    kusama: string;
    polkadot: string;
    westend: string;
};
export declare const JS_WASM_PROVIDERS: Record<string, LazyProvider>;
/**
 * These fallback providers connect to a centralized remote RPC node.
 */
export declare const REMOTE_PROVIDERS: Record<string, LazyProvider>;
export declare const ALL_PROVIDERS: {
    [x: string]: LazyProvider;
};
//# sourceMappingURL=constants.d.ts.map