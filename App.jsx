import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import CardPage from './CardPage'
import CardRow from './CardRow'
import Payment from './Payment'
import Profile from './Profile'



function App() {
  return (
    <div>
      <Navbar></Navbar>
    <Routes>
    <Route path="/"  element={<Home></Home>}></Route>
    <Route path="/Card/:CardID"  element={<CardPage></CardPage>}></Route>
    <Route path='/ViewCard' element={<CardRow></CardRow>}></Route>
    <Route path='/Payment' element={<Payment></Payment>}></Route>
    <Route path='/Profile' element={<Profile></Profile>}></Route>
    
    </Routes>
     <Footer></Footer>
    </div>
  )
}

export default App