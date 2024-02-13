import React from 'react'

const Buttonscompo = ({label,onClick}) => {
  return (
    <div>
        <button onClick={onClick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 w-full mt-3 font-medium rounded-lg text-sm p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{label}</button>
    </div>
  )
}

export default Buttonscompo