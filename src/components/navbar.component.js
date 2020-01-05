 import React, {Component} from 'react';
 import {Link} from 'react-router-dom';

 export default class Navbar extends Component{
     render(){
         return(
             <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                 <Link to="/" className="navbar-brand">Parallel paradox</Link>
                 <div className="collapase navbar-collapse">
                     <ul className="navbar-nav mr-auto">
                     <li className="navbar-item">
                            <Link to="/" className="nav-link">task</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">create task</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">create user</Link>
                        </li>
                     </ul>
                 </div>
             </nav>
         );
     }
 }