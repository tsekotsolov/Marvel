import React from "react";
import { Suspense, lazy } from "react";
import CardFooter from "./CardFooter";
import Loading from "./Loading";
import "./card.css";
const Img = lazy(() => import("./Img"));

const Card = props => {
  const { name, title, thumbnail } = props;
  return (
    <React.Fragment>
      <div className="col-md-3 col-sm-4 col-xs-12">
        <div className="card">
          <div className="card-body">
            {name ? (
              <p className="card-text">{`${name}`}</p>
            ) : (
              <p className="card-text">{`${title}`}</p>
            )}
          </div>
          <Suspense
            fallback={
              <Loading first={"loader-wrapper-small"} second={"loader"} />
            }
          >
            <Img path={`${thumbnail.path}.${thumbnail.extension}`} />
          </Suspense>
          {name ? (
            <CardFooter
              {...props}
              filteredArray={props.filteredArray}
              modifyFilteredArray={props.modifyFilteredArray}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Card;
