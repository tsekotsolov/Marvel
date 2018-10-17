import React, { Component } from 'react'
import Button from '../buttons/Button'
import createFormObj from '../../utils/createFormObj'

class LogInForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formData:{},
      error:''
    }
  }

  captureInputData = (event)=>{ 
   this.setState({
    formData:Object.assign(this.state.formData,createFormObj(event))
   }) 
  
  }

  submitForm = (event)=>{
    event.preventDefault()
    
    fetch(
      'https://marveltest.eu.auth0.com/dbconnections/signup',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ client_id: 'CpDbnN3C4h56IEGNpuKKvoueTSLORJl4',
        email: this.state.formData.email,
        password: this.state.formData.password,
        connection: 'Username-Password-Authentication',
      })
    }
    ).then((response => response.json())).then(data => console.log(JSON.stringify(data)))
 
  }

  render () {
    
    return (
        <div className="container login-form">
          <form className="col-md-6 m-auto" onSubmit={this.submitForm}>
          <div className = "image-form-holder">
            <img className='card-img-top' src='https://res.cloudinary.com/tsekotsolov/image/upload/v1539777401/Marvel/images.png' alt='marvel' />
            <h4>Sign in to your account</h4>
          </div> 
              <div className="form-group">
                <label htmlFor="InputEmail">Email</label>
                <input type="email" onChange={this.captureInputData} className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Your Email" data-name="email"/>
              </div>
              <div className="form-group">
                  <label htmlFor="InputPassword1">Password</label>
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