import React from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Inputbox from '../components/Inputbox'
import Buttonscompo from '../components/Buttonscompo'
import Buttondown from '../components/Buttondown'

const Login = () => {
  return (
    <div className='bg-white h-screen flex justify-center items-center '>
    <div className='w-full sm:w-1/2 md:w-1/3 rounded-lg  shadow-lg bg-green-100 flex flex-col justify-center items-center'>
    <Heading label={'Sign In'}/>
    <Subheading content={'Enter your credentials to access your account'}/>
    <div className='p-5'>
    <Inputbox inputheader={'Email'} type={'email'} placeholder={'abc@gmail.com'}/>
    <Inputbox inputheader={'Password'} type={'password'} placeholder={'*******'}/>
    
    <Buttonscompo label={'Sign In'}/>
    </div>
    <Buttondown label={'Dont have an account ?'} buttontext={'Sign Up'} to={"/signup"}/>
    
    </div>
    </div>
  )
}

export default Login