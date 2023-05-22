import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MainLogin from './MainLogin';
import ProfilePage from './ProfilePage';
import './index.css'
import ParentComponent from './ParentComponent ';


function App() {



  return (
    <>

      <Routes>
        <Route exact path='/' element={<MainLogin />} />
        <Route exact path='/login' element={<MainLogin />} />
        <Route exact path='/profile' element={<ProfilePage />} />
      </Routes>
      {/* <ParentComponent/> */}

    </>
  )
}

export default App;