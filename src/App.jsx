import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Favorite from './components/Favorite'
import Movie from './components/Movie'
import { StateContext, StateContextCustom } from './context/StateContext'
import Login from './components/Login'
import Register from './components/Register'



const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Movie/>}/>
        <Route path='/:detailId' element={<Movie/>}/>
        <Route path='/:input' element={<Movie/>}/>
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App