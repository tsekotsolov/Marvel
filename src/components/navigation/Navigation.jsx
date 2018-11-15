import React from "react";
import "./navigaton.scss";
import { connect } from "react-redux";
import authenticate from "../../actions/authenticate";
import { Link } from "react-router-dom";
import notification from "../../utils/notifications/notifications";

let Navigation = props => {
  const logout = () => {
    props.dispatch(authenticate());
    localStorage.clear();
    notification("logout")();
  };
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-dark navbar-custom">
      <Link to="/characters" className="navbar-brand">
        Marvel
      </Link>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img src={localStorage.getItem("profilePicture")} alt="" />
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to="/" className="dropdown-item">
            User Info
          </Link>
          <Link to="/characters" className="dropdown-item">
            Characters
          </Link>
          <Link to="/favorites" className="dropdown-item">
            Favorites
          </Link>
          <Link to="/" className="dropdown-item" onClick={logout}>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

const mapstateToProps = state => ({
  isAuth: state.isAuth
});

export default connect(mapstateToProps)(Navigation);
