import logo from "../logo.svg";
import "../App.css";
import React, { useState } from "react";
import InputForm from "./InputForm";
import JobList from "./JobList";
import UserInput from "./UserInput";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState("");
  const [rubyUser, setRubyUser] = useState([]);
  const [toggle,setToggle] = useState(true)
  const [field, setField] = useState({
    name:"",
  });
  const [lang,setLang]= useState({
    language:""
  })
  const [deeper,setDeeper] = useState({
    language: ""
  })

  function setUserHold(userHold) {
    setRubyUser(userHold[0].jobs);
  }
  function updateJobDisplay(newJob){
    setRubyUser([...rubyUser,newJob])
  }
  // update after delete
async function updateDisplay(id){
  const filteredRubyUser = rubyUser.filter(job => job.id !== id)
  await setRubyUser(filteredRubyUser)
}

function updateLangDisplay(){
  setDeeper(...deeper,lang)
}

  return (
    <div className="App">
      <div id="title">
      <h1>Career Keepr</h1>
      </div>
      {/* <Header />  */}
      {toggle === true ? (
        <UserInput
          user={user}
          setUser={setUser}
          rubyUser={rubyUser}
          setRubyUser={setRubyUser}
          setUserHold={setUserHold}
          setToggle={setToggle}
          field={field}
          setField={setField}
        />
      ) : (
        <InputForm updateJobDisplay={updateJobDisplay} field={field} setLang={setLang} lang={lang} updateLangDisplay={updateLangDisplay}/>
      )}
      <JobList rubyUser={rubyUser} updateDisplay={updateDisplay} lang={lang} deeper={deeper} />
    </div>
  );
}

export default App;
