import React from 'react'
import Button from './Components/Button/Button'
import SideBar from './Components/SideBar/SideBar'
import UserDetail from './Components/UserDetail/UserDetail'
import ActionBar from './Components/ActionBar/ActionBar'
import './App.css'

const App = () => {
  return (
   <div className='main-container'>
    <SideBar/>
    <ActionBar/>
   </div>
  )
}

export default App
