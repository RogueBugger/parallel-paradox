import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import TaskList from "./components/tasklist.component";
import EditTask from "./components/edittask.component";
import CreateTask from "./components/createtask.component";
import CreateUser from "./components/createuser.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <br/>
      <Route path="/" exact component={TaskList}/>
      <Route path="/edit/:id" exact component={EditTask}/>
      <Route path="/create" exact component={CreateTask}/>
      <Route path="/user" exact component={CreateUser}/>
      </div>
    </Router>
    
  );
}

export default App;
