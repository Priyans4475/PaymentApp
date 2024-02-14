import React from 'react';
import { useNavigate } from "react-router-dom";


const Logout = () => {
  
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.removeItem("token"); // Corrected line
    navigate("/signin") // Corrected line - typo in "/signin" instead of "/sigin"
  }

  return (
    <button className='bg-gray-300 rounded-lg p-1' type="button" onClick={handleLogOut}>
      Logout
    </button>
  );
}

export default Logout;

