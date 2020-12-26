import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  //destructured meta.error and meta.touched
  renderErrorHelper({ error, touched }) {
    //properties of meta method
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = (formProps) => {
    console.log(formProps.meta);
    const classNameHelper = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      <div className={classNameHelper}>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        <div>{this.renderErrorHelper(formProps.meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    // console.log(formValues); //returns the obj of filled values of titles&desc
    this.props.onSubmit2(formValues);
  };
  render() {
    // console.log(this.props);
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="enter description"
        />
        <button className="ui button primary">submit</button>
      </form>
    );
  }
}

// VALIDATIONS
const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "must enter the title to proceed";
  }
  if (!formValues.description) {
    error.description = "must enter the description to proceed";
  }

  return error;
};

// exporting connect and reduxForm at same time
export default reduxForm({
  form: "streamForm",
  validate: validate,
})(StreamForm);
