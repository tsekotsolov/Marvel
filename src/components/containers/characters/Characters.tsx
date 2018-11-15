import React from "react";
import LoginForm from "../../forms/loginForm/LoginForm";
import Auth from "../../../auth/Auth";
import history from "../../../history";
import { connect } from "react-redux";
import authenticate from "../../../actions/authenticate";
import { GET_CHARACTERS } from "../../../actions/types";
import { getCharacters } from "../../../actions/characters";
import { charactersOffset } from "../../../actions/characters";
import Card from "../../card/Card";
import Wrapper from "../wrapper/Wrapper";

interface IProps {
  dispatch: (p: any) => void;
  characterOffset: (p: () => number) => void;
  characters: [];
  isAuth: boolean;
}

type CharactersItem = { id: string };

const mapstateToProps = (state: any) => ({
  isAuth: state.isAuth,
  characters: state.characters,
  characterOffset: state.characterOffset
});

export class Characters extends React.Component<IProps> {
  authorize = () => {
    const Authenticate = new Auth();
    Authenticate.handleAuthentication(history).then(() => {
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

  onScroll = (event: any) => {
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
      <Wrapper title="Characters">
        <div className="row justify-content-left">
          {this.props.characters.map((item: CharactersItem) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </Wrapper>
    ) : (
      <LoginForm />
    );
  }
}

export default connect(mapstateToProps)(Characters);
