import React from "react";
import "./container.css";
import Navigation from "../navigation/Navigation";
import LoginForm from "../forms/loginForm/LoginForm";
import Card from "../card/Card";
import Auth from "../../auth/Auth";
import history from "../../history";
import { connect } from "react-redux";
import authenticate from "../../actions/authenticate";
import { GET_CHARACTERS } from "../../actions/types";
import { getCharacters } from "../../actions/characters";
import { charactersOffset } from "../../actions/characters";

class Characters extends React.Component {
  authorize = () => {
    const Authenticate = new Auth();
    Authenticate.handleAuthentication(history).then(resp => {
      this.props.dispatch(authenticate());
    });
  };

  componentDidMount() {
    this.authorize();
    if (this.props.characters.length === 0) {
      this.props.dispatch(
        getCharacters({
          type: GET_CHARACTERS,
          offset: this.props.characterOffset
        })
      );
    }

    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = event => {
    if (
      event.target.scrollingElement.scrollHeight -
        event.target.scrollingElement.scrollTop <=
      event.target.scrollingElement.clientHeight
    ) {
      this.props.dispatch(charactersOffset());
      this.props.dispatch(
        getCharacters({
          type: GET_CHARACTERS,
          offset: this.props.characterOffset
        })
      );
    }
  };

  render() {
    return this.props.isAuth ? (
      <React.Fragment>
        <Navigation />
        <section className="characters">
          <div className="container text-center">
            <h2>Characters</h2>
            <div className="row justify-content-left wrapper">
              {this.props.characters.map(character => {
                return <Card key={character.id} {...character} />;
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    ) : (
      <LoginForm />
    );
  }
}

const mapstateToProps = state => ({
  isAuth: state.isAuth,
  characters: state.characters,
  characterOffset: state.characterOffset
});

export default connect(mapstateToProps)(Characters);
