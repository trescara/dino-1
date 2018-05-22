import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }
  componentDidMount() {
    fetch("/Listings.json")
      .then(response => response.json())
         .then(jobs => {
        return this.setState({
          jobs: jobs
        });

      });
  }
  submitJobListing = job => {
    this.setState({
      jobs: this.state.jobs.concat(job).reverse()
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobList jobs={this.state.jobs} />
          <JobForm submitJobListing={this.submitJobListing} />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
