import logo from '../logo.svg';
import '../App.css';
import React from "react";
import InputForm from "./InputForm"
import JobList from './JobList';

function App() {
  return (
    <div className="App">
      <h1>Career Keepr</h1>
      {/* <Header />  */}
      <InputForm />
      <JobList />
      
    </div>
  );
}

export default App;
