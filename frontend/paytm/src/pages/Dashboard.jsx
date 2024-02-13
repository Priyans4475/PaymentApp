import React from 'react'
import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'

const Dashboard = () => {
  return (
    <div>
      {/* <div className='flex justify-between items-center shadow-md'>
        <h1>Payments App</h1>
        <div className='flex items-center '>
          <h1>Hello, User</h1>
          <button className='w-8 h-8 rounded-full ml-2 bg-gray-400'>U</button>
        </div>
      </div>

      <div className='mt-10'>Your Balance: $83748</div>

      <div className='shadow-sm mt-10'>Users</div>
      <div className='shadow-sm'>Searchbar</div>
    <div className='p-2 mt-10'>
      <div className='flex justify-between mt-3'>
        <div className='flex'>
          <button className='bg-gray-400 rounded-full w-7 h-7 mr-2'>U1</button>
          <h1>User 1</h1>
        </div>

        <button className='bg-black text-white rounded-md'> Send Money</button>
      </div>
      <div className='flex justify-between mt-3'>
        <div className='flex'>
          <button className='bg-gray-400 rounded-full w-7 h-7 mr-2'>U2</button>
          <h1>User 2</h1>
        </div>

        <button className='bg-black text-white rounded-md'> Send Money</button>
      </div>
      <div className='flex justify-between mt-3'>
        <div className='flex'>
          <button className='bg-gray-400 rounded-full w-7 h-7 mr-2'>U3</button>
          <h1>User 3</h1>
        </div>

        <button className='bg-black text-white rounded-md'> Send Money</button>
      </div>
      </div> */}

      <Appbar />
        <div className="m-8">
            <Balance />
            <Users />
        </div>

    </div>
  )
}

export default Dashboard