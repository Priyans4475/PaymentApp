import React from 'react'

const Sendmoney = () => {
  return (
    <div className='bg-white h-screen flex justify-center items-center '>
    <div className='w-full sm:w-1/2 md:w-1/3 rounded-lg  shadow-lg bg-green-100 flex flex-col justify-center items-center'>
    <div className=' font-serif text-3xl mt-4'>
    <h1>Send Money</h1>
    </div>
    
    <div className='p-10 mr-20'>
      <div className='flex'>
        <button className='bg-green-500  w-10 h-10 rounded-full text-white'>A</button>
     
    <div className=' font-bold p-2 '>
    <h1>Friend's Name</h1>
    </div>
    </div>
    
    <div className=' font-bold p-2'>
    <h1>Amount (in Rs)</h1>
    </div>
    <div>
    <input type='text' placeholder='Enter amount'/>
    </div>
   
   
    
    <button className='w-full rounded-md mt-9 bg-black text-white'>Initiate Transfer</button>
    </div>
    
   
    </div>
    </div>
  )
}

export default Sendmoney