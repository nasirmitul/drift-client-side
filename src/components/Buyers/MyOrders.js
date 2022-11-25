import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../contexts/UserContext';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: myOrders = [] } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myOrders/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            {myOrders.length}
        </div>
    );
};

export default MyOrders;