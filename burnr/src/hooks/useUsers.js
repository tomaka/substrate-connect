// SPDX-License-Identifier: Apache-2
import { useEffect, useState } from 'react';
import useApi from './api/useApi';
import useIsMountedRef from './api/useIsMountedRef';
export default function useUsers() {
    const api = useApi();
    const [users, setUsers] = useState([]);
    const mountedRef = useIsMountedRef();
    useEffect(() => {
        api.query.system.account
            .entries()
            .then((entries) => {
            console.log('entries', entries);
            mountedRef.current && setUsers(entries
                .filter(([, { data: { free } }]) => !free.isZero())
                .map(([key]) => key.args[0].toString()));
        })
            .catch(console.error);
    }, [api, mountedRef]);
    return users;
}
//# sourceMappingURL=useUsers.js.map