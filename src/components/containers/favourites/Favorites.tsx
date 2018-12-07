import React from "react";
import Card from "../../card/Card";
import { connect } from "react-redux";
import SearchBar from "../../forms/searchBar/SearchBar";
import NoItems from "../../notfound/NoItems";
import Wrapper from "../wrapper/Wrapper";

interface IProps {
  favArray: number[];
  characters: CharacterItem[];
}

interface IState {
  filteredArray: CharacterItem[];
  doesInputMatch: boolean;
}

type CharacterItem = { id: number; name: string };
type FavouritesArray = CharacterItem[];

const mapstateToProps = (state: any) => ({
  favArray: state.favArray,
  characters: state.characters
});

class Favorites extends React.Component<IProps, IState> {
  state: IState = {
    filteredArray: [],
    doesInputMatch: false
  };

  modifyFilteredArray = (
    filteredArray: CharacterItem[],
    doesInputMatch: boolean
  ) => {
    this.setState({
      filteredArray,
      doesInputMatch
    });
  };

  render() {
    const favouritesArray: FavouritesArray = this.props.characters.filter(
      character => this.props.favArray.includes(character.id)
    );

    return (
      <Wrapper title="Favourites">
        <SearchBar
          modifyFilteredArray={this.modifyFilteredArray}
          favouritesArray={favouritesArray}
        />
        {!this.state.filteredArray.length && !this.state.doesInputMatch ? (
          <div>
            {favouritesArray.length ? (
              <div className="row justify-content-left">
                {favouritesArray.map((character: CharacterItem) => {
                  return <Card key={character.id} {...character} />;
                })}
              </div>
            ) : (
              <NoItems text="No Items to display" />
            )}
          </div>
        ) : (
          <div className="row justify-content-left">
            {this.state.filteredArray.length ? (
              this.state.filteredArray.map((character: CharacterItem) => {
                return (
                  <Card
                    key={character.id}
                    modifyFilteredArray={this.modifyFilteredArray}
                    filteredArray={this.state.filteredArray}
                    {...character}
                  />
                );
              })
            ) : (
              <NoItems text="No Characters match your criteria" />
            )}
          </div>
        )}
      </Wrapper>
    );
  }
}

export default connect(mapstateToProps)(Favorites);
