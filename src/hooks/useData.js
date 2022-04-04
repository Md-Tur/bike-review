import { useEffect, useState } from "react";

const useData = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('userdb.json')
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])
    return [user, setUser];
}
export default useData;