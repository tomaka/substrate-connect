// SPDX-License-Identifier: Apache-2
import { useEffect, useState } from 'react';
import useApi from './api/useApi';
import useIsMountedRef from './api/useIsMountedRef';
export default function useChainInfo() {
    const api = useApi();
    const [newHead, setNewHead] = useState();
    const mountedRef = useIsMountedRef();
    useEffect(() => {
        api.rpc.chain
            .subscribeNewHeads((lastHeader) => {
            mountedRef.current && setNewHead(lastHeader);
        }).catch(err => console.log('There was an error', err));
    }, [api.rpc.chain, mountedRef]);
    return newHead;
}
//# sourceMappingURL=useChainInfo.js.map