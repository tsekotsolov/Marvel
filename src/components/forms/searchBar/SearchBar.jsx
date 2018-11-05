import React from "react";
import "./search-bar.scss";

const SearchBar = props => {
  const catchData = event => {
    const name = event.target.value;
    const filteredArray = props.favouritesArray.filter(character =>
      character.name.startsWith(name)
    );
    name
      ? props.modifyFilteredArray(filteredArray, true)
      : props.modifyFilteredArray(filteredArray, false);
  };
  return (
    <div className="search-bar">
      <input type="text" placeholder="filter by name" onChange={catchData} />
      <i className="fas fa-search" />
    </div>
  );
};

export default SearchBar;
