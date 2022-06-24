import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import './App.css';



import { ToastContainer } from 'react-toastify'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'
import Header from './Components/Header'
import Home from './Components/Home'
import Error from './Components/Error';

const App = () => {
  return (
    <>
 <div className='App'>
  <ToastContainer />

        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default App