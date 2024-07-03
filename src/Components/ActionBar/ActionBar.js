import React from 'react'
import Button from '../Button/Button'
import './ActionBar.css'

const ActionBar = () => {
  return (
    <div className='action-bar-container'>
        <h1>Action Bar</h1>
        <div className='action-bar-list-container'>
            <Button label='EDIT'/>
            <Button label='DELETE'/>
        </div>
    </div>
  )
}

export default ActionBar