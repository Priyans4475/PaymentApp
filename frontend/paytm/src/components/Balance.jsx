import { useState,useEffect } from "react";
import axios from "axios";
export const Balance = ({  }) => {
    const [amount, setamount] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                axios
  .get("http://localhost:3000/api/v1/account/balance",
  {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")

    }
})
  .then(function (response) {
    setamount(response.data.balance.toFixed(2))
  });
                
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };

        fetchBalance();
    }, []);

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {amount}
        </div>
    </div>
}