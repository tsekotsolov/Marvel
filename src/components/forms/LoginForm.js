import React, { Component } from 'react'
import Button from '../buttons/Button'
import createFormObj from '../../utils/createFormObj'
import requester from './requester'

class LogInForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formData:{}
    }
  }

  captureInputData = (event)=>{ 
  
  let stateCopy = {...this.state.formData,...createFormObj(event)}
  
   this.setState({
    formData:stateCopy
   }) 
  
  }

  submitForm = (event)=>{
    event.preventDefault()
    
    requester.signIn(this.state.formData)
      .then(data => console.log(JSON.stringify(data)))
  
  }

  render () {
    
    return (
        <div className="container login-form">
          <form className="m-auto" onSubmit={this.submitForm}>
          <div className = "image-form-holder">
            <img className='card-img-top' src='https://res.cloudinary.com/tsekotsolov/image/upload/v1539777401/Marvel/images.png' alt='marvel' />
            <h4>Sign in to your account</h4>
          </div> 
              <div className="form-group">
                <label htmlFor="InputEmail">Email</label>
                <input type="email" onChange={this.captureInputData} className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Your Email" data-name="email"/>
              </div>
              <div className="form-group">
                  <label htmlFor="InputPassword">Password</label>
                  <input type="password" onChange={this.captureInputData} className="form-control" id="InputPassword" placeholder="Your Password" data-name="password" />
              </div>
              <div className="form-check">
              </div>
          <div className="buttons-form-wrapper">
              <Button text="Submit" customClass="submit-button" type="submit"/>
              <Button text="Log In" customClass="signin-button"/>
          </div> 
        </form>
      </div>
    )
  }
}

export default LogInForm