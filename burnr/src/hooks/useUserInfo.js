// SPDX-License-Identifier: Apache-2
import BN from 'bn.js';
import { useEffect, useState } from 'react';
import useApi from './api/useApi';
import useIsMountedRef from './api/useIsMountedRef';
export default function useUserInfo(address) {
    const api = useApi();
    const mountedRef = useIsMountedRef();
    const [usersInfo, setUsersInfo] = useState([]);
    useEffect(() => {
        let unsubscribe = null;
        api.query.system
            .account(address, (data) => {
            mountedRef.current && setUsersInfo({
                address: address,
                created: new Date(),
                balance: new BN((data).data.free),
                reserved: new BN((data).data.reserved),
                feeFrozen: new BN((data).data.feeFrozen),
                miscFrozen: new BN((data).data.feeFrozen)
            });
        })
            .then((u) => {
            unsubscribe = u;
        })
            .catch(console.error);
        return () => {
            unsubscribe && unsubscribe();
        };
    }, [address, api, mountedRef]);
    return usersInfo;
}
//# sourceMappingURL=useUserInfo.js.map