import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Sendmoney from './components/Sendmoney'

import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
<Router>
  <Dashboard/>
  <Routes>
    <Route path='/signup' element={<Register/> }/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/signin' element={<Login/>}/>
    <Route path='/sendmoney' element={<Sendmoney/>}  />
    
  </Routes>

</Router>
   
  )
}

export default App
