import React from "react";
import CardFooter from "./CardFooter";
import StyledCard from "./StyledCard";
import Img from "./Img";


const Card = props => {
  let { name, title, thumbnail } = props;

  return (
    <div className="col-md-3 col-sm-4 col-xs-12">
      <div className="card m-2">
        <div className="card-body">
          {name ? (
            <StyledCard.Paragraph>{`${name}`}</StyledCard.Paragraph>
          ) : (
            <StyledCard.Paragraph>{`${title}`}</StyledCard.Paragraph>
          )}
        </div>

        <Img
          path={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`}
        />

        {name && (
          <CardFooter
            {...props}
            filteredArray={props.filteredArray}
            modifyFilteredArray={props.modifyFilteredArray}
          />
        )}
      </div>
    </div>
  );
};
export default Card;
