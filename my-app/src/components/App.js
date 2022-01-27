import logo from '../logo.svg';
import '../App.css';
import React,{useState} from "react";
import InputForm from "./InputForm"
import JobList from './JobList';
import UserInput from './UserInput'

function App() {
  const [user,setUser]=useState("")
  return (
    <div className="App">
      <h1>Career Keepr</h1>
      {/* <Header />  */}
      {user.length == 0 ? <UserInput user={user} setUser={setUser} /> : <InputForm />}
      <JobList />
      
    </div>
  );
}

export default App;
