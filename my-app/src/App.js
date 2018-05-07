
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import JobForm from './components/JobForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <JobForm />
        {/* <JobList /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
