import { useEffect, useState } from "react";

const useToken = email => {

    console.log("useToken",email);
    
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://drift-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('secret-token', data.accessToken)
                        setToken(data.accessToken);
                    }
                    console.log(data);
                })
        }
    }, [email])

    return [token];
}

export default useToken;