import React from "react";
import Navigation from "../navigation/Navigation";
import Card from "../card/Card";
import { connect } from "react-redux";
import SearchBar from "../forms/searchBar/SearchBar";
import NoItems from "../notfound/NoItems";
import "./container.scss";

class Favorites extends React.Component {
  state = {
    filteredArray: [],
    doesInputMatch: false
  };

  modifyFilteredArray = (filteredArray, doesInputMatch) => {
    this.setState({
      filteredArray,
      doesInputMatch
    });
  };

  render() {
    const favouritesArray = this.props.characters.filter(character =>
      this.props.favArray.includes(character.id)
    );

    return (
      <React.Fragment>
        <Navigation />
        <section className="characters">
          <div className="container text-center">
            <SearchBar
              modifyFilteredArray={this.modifyFilteredArray}
              favouritesArray={favouritesArray}
            />
            <h2>Favorites</h2>
            {!this.state.filteredArray.length && !this.state.doesInputMatch ? (
              <div>
                {favouritesArray.length ? (
                  <div className="row justify-content-left wrapper">
                    {favouritesArray.map(character => {
                      return <Card key={character.id} {...character} />;
                    })}
                  </div>
                ) : (
                  <NoItems text="No Items to display" />
                )}
              </div>
            ) : (
              <div className="row justify-content-left wrapper">
                {this.state.filteredArray.length ? (
                  this.state.filteredArray.map(character => {
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
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapstateToProps = state => ({
  favArray: state.favArray,
  characters: state.characters
});
export default connect(mapstateToProps)(Favorites);
