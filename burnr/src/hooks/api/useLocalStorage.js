import { useEffect, useState } from 'react';
const useLocalStorage = (localStorageKey) => {
    const [localValue, setLocalValue] = useState(localStorage.getItem(localStorageKey) || '');
    useEffect(() => {
        localStorage.setItem(localStorageKey, localValue);
    }, [localValue, localStorageKey]);
    return [localValue, setLocalValue];
};
export default useLocalStorage;
//# sourceMappingURL=useLocalStorage.js.map