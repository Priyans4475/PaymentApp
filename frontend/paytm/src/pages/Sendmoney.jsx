// // import React, { useState } from 'react'
// // import {useSearchParams} from 'react-router-dom'
// // import axios from 'axios';

// // const Sendmoney = () => {
// // const [searchparams]=useSearchParams();
// // const id=searchparams.get("id");
// // const name=searchparams.get("name");
// // const [amount,setamount]=useState(0);
// //   return (
// //     <div className='bg-white h-screen flex justify-center items-center '>
// //     <div className='w-full sm:w-1/2 md:w-1/3 rounded-lg  shadow-lg bg-green-100 flex flex-col justify-center items-center'>
// //     <div className=' font-serif text-3xl mt-4'>
// //     <h1>Send Money</h1>
// //     </div>
    
// //     <div className='p-10 mr-20'>
// //       <div className='flex'>
// //         <button className='bg-green-500  w-10 h-10 rounded-full text-white'>{name[0].toUpperCase()}</button>
     
// //     <div className=' font-bold p-2 '>
// //     <h1>{name}</h1>
// //     </div>
// //     </div>
    
// //     <div className=' font-bold p-2'>
// //     <h1>Amount (in Rs)</h1>
// //     </div>
// //     <div>
// //     <input onChange={(e)=>
// //     setamount(e.target.value)}
// //     type='number' placeholder='Enter amount'/>
// //     </div>
   
   
    
// //     <button 
// //     onClick={()=>{
// //       axios.post("http://localhost:3000/api/v1/account/transfer",
// //       {
// //         to:id,
// //         amount
// //       },{
// //         headers:{
// //           Authorization:"Bearer " + localStorage.getItem("token")
// //         }
// //       })
// //     }} className='w-full rounded-md mt-9 bg-black text-white'>Initiate Transfer</button>
// //     </div>
    
   
// //     </div>
// //     </div>
// //   )
// // }

// // export default Sendmoney

// import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import axios from 'axios';

// const Sendmoney = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const id = searchParams.get("id") || "";
//   const name = searchParams.get("name") || "";
//   const [amount, setAmount] = useState('');

//   const initiateTransfer = () => {
//     axios.post("http://localhost:3000/api/v1/account/transfer", {
//       to: id,
//       amount
//     }, {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token")
//       }
//     })
//     .then(response => {
//       // Handle success
//       console.log("Transfer successful:", response.data);
//     })
//     .catch(error => {
//       // Handle error
//       console.error("Transfer failed:", error);
//     });
//   };

//   return (
//     <div className='bg-white h-screen flex justify-center items-center '>
//       <div className='w-full sm:w-1/2 md:w-1/3 rounded-lg shadow-lg bg-green-100 flex flex-col justify-center items-center'>
//         <div className='font-serif text-3xl mt-4'>
//           <h1>Send Money</h1>
//         </div>
//         <div className='p-10 mr-20'>
//           <div className='flex'>
//             <button className='bg-green-500 w-10 h-10 rounded-full text-white'>{name[0]?.toUpperCase()}</button>
//             <div className='font-bold p-2 '>
//               <h1>{name}</h1>
//             </div>
//           </div>
//           <div className='font-bold p-2'>
//             <h1>Amount (in Rs)</h1>
//           </div>
//           <div>
//             <input
//               onChange={(e) => setAmount(e.target.value)}
//               type='number'
//               placeholder='Enter amount'
//               value={amount}
//             />
//           </div>
//           <button
//             onClick={initiateTransfer}
//             className='w-full rounded-md mt-9 bg-black text-white'
//           >
//             Initiate Transfer
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sendmoney;
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    return <div class="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div class="flex flex-col space-y-1.5 p-6">
                <h2 class="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div class="p-6">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span class="text-2xl text-white">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 class="text-2xl font-semibold">{name}</h3>
                </div>
                <div class="space-y-4">
                    <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        type="number"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button onClick={() => {
                        axios.post("http://localhost:3000/api/v1/account/transfer", {
                            to: id,
                            amount
                        }, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                    }} class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}

export default SendMoney