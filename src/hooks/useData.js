import { useEffect, useState } from "react";

const useData = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('userdb.json')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return [users, setUsers];
}
export default useData;