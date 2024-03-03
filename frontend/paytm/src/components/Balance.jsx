import { useState,useEffect } from "react";
import axios from "axios";
export const Balance = ({  }) => {
    const [amount, setamount] = useState(null);
    const [loading,setloading]=useState(true);

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
    setloading(false)
  });
                
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };

        fetchBalance();
    }, []);

    return <div>
         {loading ? (
        <div role="status" class=" animate-bounce border-2 border-gray-400 h-40 w-[280px] shadow-lg rounded-lg mt-10 ml-[150px]">
        <div class=" bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
        <div class="h-10 bg-gray-200 rounded-full dark:bg-gray-300 px-12 ml-5 mt-4 mr-2"></div>
        <div class="h-10 bg-gray-200 mr-2 rounded-full dark:bg-gray-200 ml-10 px-6 mt-10 "></div>
    

    </div>
      ) : (
        <p> <div className=" border-2 border-green-400 h-40 w-[280px] shadow-lg rounded-lg  ml-[150px]">
        <div className="font-bold font-serif text-xl px-12 ml-5 mt-4">
            Your balance
        </div>
        <div className="font-semibold ml-10 px-6 mt-10  text-lg">
        ₹{amount}
        </div>
    </div></p>
      )}
   
    </div>
}