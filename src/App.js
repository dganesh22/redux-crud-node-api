import React from 'react'
import { BrowserRouter, Route, Routes } from  'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Pnf from './components/Pnf'
import Create from './components/Create'
import Update from './components/Update'
import { ToastContainer } from 'react-toastify'

function App(props) {
  return (
    <BrowserRouter>
          <Menu/>
          <ToastContainer autoClose={4000} position={'top-right'} />
          <Routes>
                <Route path={`/`} element={<Home/>} />
                <Route path={`/create`} element={<Create/>} />
                <Route path={`/update/:id`} element={<Update/>} />
                <Route path={`/*`} element={<Pnf/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
