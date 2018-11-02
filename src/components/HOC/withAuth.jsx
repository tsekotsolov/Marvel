import React from 'react';
import Auth from '../../auth/Auth';
import LoginForm from '../forms/loginForm/LoginForm';
const withAuth = (WrappedComponent) => {
	return class extends React.Component {
		render() {
			const Authenticate = new Auth();
			let isAuthenticated = Authenticate.isAuthenticated();
			return isAuthenticated ? <WrappedComponent {...this.props} /> : <LoginForm />;
		}
	};
};
export default withAuth;
