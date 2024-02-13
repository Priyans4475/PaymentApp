import React from 'react'

const Inputbox = ({inputheader,type, placeholder,onchange}) => {
  return (<>
    <div className=' font-bold p-2'>
    <h1 className=' font-bold '>{inputheader}</h1>
    </div>
    <div>
    <input onChange={onchange} type={`${type}`} placeholder={`${placeholder}`}/>
    </div>
    </>
  )
}

export default Inputbox