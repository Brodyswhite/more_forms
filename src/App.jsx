import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './components/Person';
import ShowPerson from './components/ShowPerson';

function App() {

  const [persons,setPersons] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  })

  const handleSubmit = e => {
    e.preventDefault();

    setPersons({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    })
  }

  const handlePersonChange = e => {
    setPersons ({
      ...persons,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className="App">
      <Person 
        inputs={persons}
        handleChange={handlePersonChange}
        handleSubmit={handleSubmit}
        />
      <ShowPerson persons={persons}/>
    </div>
  );
}


export default App;
