import React, { Component } from "react";
import "./container.scss";
import Navigation from "../navigation/Navigation";
import Card from "../card/Card";
import { connect } from "react-redux";
import { GET_DETAILS } from "./../../actions/types";
import {
  getDetails,
  clearDetails,
  detailsOffset,
  clearDetailsOffset
} from "../../actions/details";

class Details extends Component {
  componentDidMount() {
    this.props.dispatch(
      getDetails({
        type: GET_DETAILS,
        id: this.props.location.search.substr(1),
        offset: this.props.detailsOffset
      })
    );
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    this.props.dispatch(clearDetails());
    this.props.dispatch(clearDetailsOffset());
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = event => {
    if (
      event.target.scrollingElement.scrollHeight -
        event.target.scrollingElement.scrollTop <=
      event.target.scrollingElement.clientHeight
    ) {
      this.props.dispatch(detailsOffset());
      this.props.dispatch(
        getDetails({
          type: GET_DETAILS,
          id: this.props.location.search.substr(1),
          offset: this.props.detailsOffset
        })
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <section className="characters">
          <div className="container text-center">
            <h2>Details</h2>
            <div className="row justify-content-left wrapper">
              {this.props.details.map(comics => {
                return <Card key={comics.id} {...comics} />;
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapstateToProps = state => ({
  details: state.details,
  detailsOffset: state.detailsOffset
});

export default connect(mapstateToProps)(Details);
