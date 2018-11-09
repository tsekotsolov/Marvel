import React from "react";
import "./wrapper.scss";
import Navigation from "../../navigation/Navigation";
import Card from "../../card/Card";

function Wrapper(props) {
  return (
    <React.Fragment>
      <Navigation />
      <section className="wrapper">
        <div className="container text-center">
          <h2>{props.title}</h2>
          <div className="row justify-content-left wrapper">
            {props.data.map(item => {
              return <Card key={item.id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Wrapper;
