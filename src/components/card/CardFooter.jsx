import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import addRemoveFavourites from "../../actions/addRemoveFavourites";

const CardFooter = props => {
  const toggleFavourites = () => {
    props.dispatch(addRemoveFavourites(props.id));
    if (props.filteredArray) {
      const filtered = props.filteredArray.filter(
        character => character.id !== props.id
      );
      props.modifyFilteredArray(filtered, true);
    }
  };

  return (
    <div>
      <div className="link-wrapper">
        <Link to={`/character-details?${props.id}`}>Details</Link>
        <Link to="#" onClick={toggleFavourites}>
          {props.favArray.includes(props.id) ? (
            <i className="fas fa-heart" />
          ) : (
            <i className="far fa-heart" />
          )}
        </Link>
      </div>
    </div>
  );
};
const mapstateToProps = state => ({
  favArray: state.favArray
});
export default connect(mapstateToProps)(CardFooter);
