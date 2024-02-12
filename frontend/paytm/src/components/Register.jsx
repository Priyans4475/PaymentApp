import React from 'react'

const Register = () => {
  return (
    <div className='bg-white h-screen flex justify-center items-center '>
<div className='w-full sm:w-1/2 md:w-1/3 rounded  shadow-lg bg-green-100 flex flex-col justify-center items-center'>
<div className=' font-serif text-5xl'>
<h1>Sign Up</h1>
</div>
<div className='font-thin'>
<h1>Enter your information to create an account</h1>
</div>
<div className='p-10'>
<div className=' font-bold p-2 '>
<h1>First Name</h1>
</div>
<div>
<input type='text' placeholder='john'/>
</div>
<div className=' font-bold p-2'>
<h1>Last Name</h1>
</div>
<div>
<input type='text' placeholder='Doe'/>
</div>
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

<button className='w-full rounded-md mt-9 bg-black text-white'>Sign Up</button>
</div>

<div className='flex'>
<div> Already have an account ?</div>
<div className='underline cursor-pointer'> Login</div>
</div>
</div>
</div>
  )
}

export default Register