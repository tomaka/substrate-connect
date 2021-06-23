// SPDX-License-Identifier: Apache-2
import { useEffect, useState } from 'react';
export default function useProvider() {
    const [endpoint] = useState(null);
    useEffect(() => {
        if (endpoint) {
            console.log('YES endpoint', endpoint);
        }
        else {
            console.log("NO endpoint");
        }
    }, [endpoint]);
    return endpoint;
}
//# sourceMappingURL=useProvider.js.map