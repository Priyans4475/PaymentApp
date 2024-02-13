import React from 'react'
import {Link} from 'react-router-dom'

const Buttondown = ({label,buttontext,to}) => {
  return (
    <div> 
        <div className='flex'>
    <div> {label}</div>
    <Link className='underline cursor-pointer' to={to}>{buttontext}</Link>
    </div>
    </div>
  )
}

export default Buttondown