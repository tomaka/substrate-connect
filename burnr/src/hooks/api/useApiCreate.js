// SPDX-License-Identifier: Apache-2
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Detector } from '@substrate/connect';
import { ALL_PROVIDERS } from '../../utils/constants';
import { useIsMountedRef, useLocalStorage } from '..';
console.log('ALL_PROVIDERS: ', ALL_PROVIDERS);
export default function useApiCreate() {
    const [api, setApi] = useState({});
    const [localEndpoint] = useLocalStorage('endpoint');
    const [provider] = useState(ALL_PROVIDERS[localEndpoint] || ALL_PROVIDERS['Westend-WsProvider']);
    const mountedRef = useIsMountedRef();
    useEffect(() => {
        const choseSmoldot = (endpoint) => __awaiter(this, void 0, void 0, function* () {
            try {
                const detect = new Detector('burnr wallet');
                const api = yield detect.connect(endpoint);
                console.log(`Burnr is now connected to ${endpoint}`);
                mountedRef.current && setApi(api);
            }
            catch (err) {
                console.log('A wild error appeared:', err);
            }
        });
        const endpoint = provider.network.toLowerCase();
        endpoint === 'local network' && ApiPromise
            .create({
            provider: new WsProvider('ws://127.0.0.1:9944'),
            types: {}
        })
            .then((api) => {
            console.log(`Burnr is now connected to local network`);
            console.log("API api", api);
            mountedRef.current && setApi(api);
        })
            .catch((err) => {
            console.error(err);
        });
        endpoint !== 'local network' && choseSmoldot(endpoint);
    }, [mountedRef, provider.endpoint, provider.network, localEndpoint]);
    return api;
}
//# sourceMappingURL=useApiCreate.js.map