import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Sendmoney from './pages/Sendmoney'

import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
<Router>
  
  <Routes>
    <Route path='/signup' element={<Register/> }/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/signin' element={<Login/>}/>
    <Route path='/send' element={<Sendmoney/>}  />
    
  </Routes>

</Router>
   
  )
}

export default App
