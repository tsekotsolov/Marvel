import React from "react";
import "./search-bar.scss";

type CharacterItem = { id: number; name: string };

interface IProps {
  favouritesArray: CharacterItem[];
  modifyFilteredArray: (
    filteredArray: CharacterItem[],
    doesInputMatch: boolean
  ) => void;
}

const SearchBar = (props: IProps) => {
  const catchData = (event: any) => {
    const name = event.target.value;
    const filteredArray = props.favouritesArray.filter(
      (character: CharacterItem) => character.name.startsWith(name)
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
