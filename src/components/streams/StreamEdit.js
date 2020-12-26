import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    // console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          /*-.pick()-> returns the new object with selected keys as arg */
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit2={this.onSubmit}
          /* 1)initialValues->checks the names in forms in redux-form
           2)this.props.stream->contains the stored content in api
        */
        />
      </div>
    );
  }
}

/* to use the property's info from the component we need 2nd arg->ownProp */
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
