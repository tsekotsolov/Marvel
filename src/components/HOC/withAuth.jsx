import React from 'react'
import history from '../../history'
import Auth from '../../auth/Auth'

const withAuth = (WrappedComponent) => {
  return class extends React.Component {

    authorize = ()=> {
      const Authenticate = new Auth()
      Authenticate.handleAuthentication(history).then(() => {
        Authenticate.getProfile().then((profile) => {
          return profile
        })
      })
    }
    componentDidMount(){
        this.authorize()
    }
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}
export default withAuth
