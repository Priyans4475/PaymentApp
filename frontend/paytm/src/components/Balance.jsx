import { useState,useEffect } from "react";
import axios from "axios";
export const Balance = ({  }) => {
    // const [amount, setamount] = useState(null);

    // useEffect(() => {
    //     const fetchBalance = async () => {
    //         try {
    //             // Fetch balance data from backend API using Axios
    //             const response = await axios.get('http://localhost:3000/api/v1/account/balance');
    //             // Set balance in state
    //             setamount(response.data.balance);
    //             console.log(response.data.balance);
    //         } catch (error) {
    //             console.error('Error fetching balance:', error);
    //         }
    //     };

    //     fetchBalance();
    // }, []);

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs 10000
        </div>
    </div>
}