import React from 'react';
import { useNavigate } from "react-router-dom";


const Logout = () => {
  
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.removeItem("token"); // Corrected line
    navigate("/") // Corrected line - typo in "/signin" instead of "/sigin"
  }

  return (
    <button className='bg-green-500 rounded-lg font-serif px-6 py-2' type="button" onClick={handleLogOut}>
      Logout
    </button>
  );
}

export default Logout;

