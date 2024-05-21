import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
export default function SessionManager({ tokenKey, expirationTime }) {
    const [token, setToken] = useState(null);

    const newToken = generateToken();
    setToken(newToken);

    
    setLocalStorageItem.setItem(tokenKey, JSON.stringify({
        value: newToken,
        expiration: Date.now() + expirationTime * 60 * 1000
    }));

    const clearTokenTimer = setInterval(() => {
        const storedToken = localStorage.getItem(tokenKey);
        if (storedToken) {
            const { expiration } = JSON.parse(storedToken);
            if (expiration < Date.now()) {
                localStorage.removeItem(tokenKey);
                setToken(null);
            }
        }
    }, expirationTime * 60 * 1000);
    
    return () => clearInterval(clearTokenTimer);

    return null;
}