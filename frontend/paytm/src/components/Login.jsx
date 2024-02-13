import React from 'react'

const Login = () => {
  return (
    <div className='bg-white h-screen flex justify-center items-center '>
    <div className='w-full sm:w-1/2 md:w-1/3 rounded-lg  shadow-lg bg-green-100 flex flex-col justify-center items-center'>
    <div className=' font-serif text-5xl'>
    <h1>Sign In</h1>
    </div>
    <div className='font-thin'>
    <h1>Enter your credentials to access your account</h1>
    </div>
    <div className='p-10'>
   

    <div className=' font-bold p-2'>
    <h1 className=' font-bold '>Email</h1>
    </div>
    <div>
    <input type='email' placeholder='abc@email.com'/>
    </div>
    <div className=' font-bold p-2'>
    <h1>Password</h1>
    </div>
    <div>
    <input type='password' placeholder='****'/>
    </div>
    
    <button className='w-full rounded-md mt-9 bg-black text-white'>Sign In</button>
    </div>
    
    <div className='flex'>
    <div> Don't have an account ?</div>
    <div className='underline cursor-pointer'> Sign Up</div>
    </div>
    </div>
    </div>
  )
}

export default Login