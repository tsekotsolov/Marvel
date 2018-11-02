import React from 'react';
import './search-bar.css';
import { connect } from 'react-redux';

const SearchBar = (props) => {
	const favouritesArray = props.characters.filter((character) => props.favArray.includes(character.id));

	const catchData = (event) => {
		const name = event.target.value;
		let filteredArray;

		!name
			? (filteredArray = [])
			: (filteredArray = favouritesArray.filter((character) => character.name.startsWith(name)));
		name ? props.modifyFilteredArray(filteredArray, true) : props.modifyFilteredArray(filteredArray, false);
	};
	return (
		<div className="search-bar">
			<input type="text" placeholder="filter by name" onChange={catchData} />
			<i className="fas fa-search" />
		</div>
	);
};

const mapstateToProps = (state) => ({
	characters: state.characters,
	favArray: state.favArray
});

export default connect(mapstateToProps)(SearchBar);
