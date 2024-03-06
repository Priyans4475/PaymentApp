import React, { useState } from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Inputbox from '../components/Inputbox'
import Buttonscompo from '../components/Buttonscompo'
import Buttondown from '../components/Buttondown'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstname,setfirstname]=useState('');
  const [lastname,setlastname]=useState('');
  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');
  const navigate = useNavigate();
  return (

    <div className='bg-white h-screen flex justify-center items-center '>
<div className='w-full sm:w-1/2 md:w-1/3 rounded-lg  shadow-lg bg-green-100 flex flex-col justify-center items-center'>
<Heading label={'Sign Up'}/>
<Subheading content={'Enter your information to create an account'}/>
<div className='p-10'>
<Inputbox onchange={e=>{
  setfirstname(e.target.value)
}}
inputheader={'First Name'} type={'text'} placeholder={'Firstname'}/>
<Inputbox  onchange={e=>{
  setlastname(e.target.value)
}}
 inputheader={'Last Name'} type={'text'} placeholder={'lastname'}/>
<Inputbox 
onchange={e=>{
  setusername(e.target.value)
}}inputheader={'Email'} type={'email'} placeholder={'abc@gmail.com'}/>
<Inputbox 
onchange={e=>{
  setpassword(e.target.value)
}}inputheader={'Password'} type={'password'} placeholder={'***********'}/>

<Buttonscompo 
 onClick={async () => {
  const response = await axios.post("https://paymentapp-10.onrender.com/api/v1/user/signup", {
    username,
    firstname,
    lastname,
    password
  });
  localStorage.setItem("token", response.data.token)
  navigate("/dashboard")
}} label={'Sign Up'}/>
</div>

<Buttondown label={'Already have an account ?'} buttontext={'Sign In'} to={'/'}/>
</div>
</div>
  )
}

export default Register