import React, { Component } from "react";
import { createStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    // console.log(formValues); //returns the obj of filled values of titles&desc
    this.props.createStream(formValues);
  };
  render() {
    // console.log(this.props)
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit2={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream: createStream })(StreamCreate);
