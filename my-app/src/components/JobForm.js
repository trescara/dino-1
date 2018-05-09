import React from "react";

class JobForm extends React.Component {
  state = {
    title: "",
    pay: "",
    description: "",
    interested: ""
  };
  handleUserInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  resetForm = () => {
    this.setState({
      title: "",
      pay: "",
      description: "",
      interested: ""
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.submitJobListing(this.state);
    this.resetForm();
  };
  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form className="job-form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleUserInput}
          />
          <label htmlFor="pay">Compensation</label>
          <input
            type="text"
            name="pay"
            value={this.state.pay}
            onChange={this.handleUserInput}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleUserInput}
            rows="8"
            cols="40"
          />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    );
  }
}

export default JobForm;
