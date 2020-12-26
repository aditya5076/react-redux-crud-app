import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  // helper 1
  renderActions() {
    return (
      <>
        <button onClick={this.onSubmit} className="ui primary negative  button">
          Delete
        </button>
        <button onClick={() => history.push("/")} className="ui button">
          Cancel
        </button>
      </>
    );
  }

  // helper 2
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure! want to delete a stream?";
    }
    return `Are you sure! want to delete a stream of title: ${this.props.stream.title}?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        action={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
