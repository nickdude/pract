import React from 'react'
import './Button.css'

const Button = ({label}) => {

  return (
    <button className='button-container'>{label}</button>
  )
}

export default Button