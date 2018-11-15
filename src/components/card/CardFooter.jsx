import React from "react";
import { connect } from "react-redux";
import addRemoveFavourites from "../../actions/addRemoveFavourites";
import StyledCard from "./StyledCard";
import { Link } from "react-router-dom";

const mapstateToProps = state => ({
  favArray: state.favArray
});

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
    <StyledCard.Footer>
      <Link to={`/character-details?${props.id}`}>
        <StyledCard.Link>Details</StyledCard.Link>
      </Link>

      <StyledCard.Link onClick={toggleFavourites}>
        {props.favArray.includes(props.id) ? (
          <i className="fas fa-heart" />
        ) : (
          <i className="far fa-heart" />
        )}
      </StyledCard.Link>
    </StyledCard.Footer>
  );
};
export default connect(mapstateToProps)(CardFooter);
