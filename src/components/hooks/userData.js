import { useEffect, useState } from "react"

const userReview = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('userdb.json')
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])
}