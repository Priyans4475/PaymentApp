import React, { useState } from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Inputbox from '../components/Inputbox'
import Buttonscompo from '../components/Buttonscompo'
import Buttondown from '../components/Buttondown'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const navigate = useNavigate();
  return (
    <div className='bg-white h-screen flex justify-center items-center '>
    <div className='w-full sm:w-1/2 md:w-1/3 rounded-lg  shadow-lg bg-green-100 flex flex-col justify-center items-center'>
    <Heading label={'Sign In'}/>
    <Subheading content={'Enter your credentials to access your account'}/>
    <div className='p-5'>
    <Inputbox onchange={(e)=>{
      setusername(e.target.value)
    }
    }
    inputheader={'Email'} type={'email'} placeholder={'user@gmail.com'}/>
    <Inputbox 
    onchange={(e)=>{
      setpassword(e.target.value)
    }
    }
    inputheader={'Password'} type={'password'} placeholder={'*******'}/>
    
    <Buttonscompo label={'Sign In'} onClick={async () => {
  const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
    username,
    password
  });
  localStorage.setItem("token", response.data.token)
  navigate("/dashboard")
}}/>
    </div>
    <Buttondown label={'Dont have an account ?'} buttontext={'Sign Up'} to={"/signup"}/>
    
    </div>
    </div>
  )
}

export default Login