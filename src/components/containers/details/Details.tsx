import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_DETAILS } from "../../../actions/types";
import {
  getDetails,
  clearDetails,
  detailsOffset,
  clearDetailsOffset
} from "../../../actions/details";
import Card from "../../card/Card";
import Wrapper from "../wrapper/Wrapper";

interface IProps {
  dispatch: (p: any) => void;
  detailsOffset: (p: () => number) => void;
  details: [];
  location: any;
}

type DetailsItem = { id: number };

const mapstateToProps = (state: any) => ({
  details: state.details,
  detailsOffset: state.detailsOffset
});

class Details extends React.Component<IProps> {
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

  onScroll = (event: any) => {
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
      <Wrapper title="Details">
        <div className="row justify-content-left">
          {this.props.details.map((item: DetailsItem) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </Wrapper>
    );
  }
}

export default connect(mapstateToProps)(Details);
