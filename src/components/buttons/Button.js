import React from 'react'


const LoginButton = (props) => {
  return (
    <button type={props.type} className={props.customClass}>{props.text}</button>
  )
}

export default LoginButton