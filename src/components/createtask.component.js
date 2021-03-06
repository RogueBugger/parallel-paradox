import React, {Component} from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateTask extends Component{
    constructor(props){
        super(props);  
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeTaskName = this.onChangeTaskName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            taskname: "",
            description:"",
            duration:0,
            deadline: new Date(),
            users:[]
        }
    }
    componentDidMount(){
        this.setState({
            users:['test user'],
            username:"test user"
        })
    }
    onChangeTaskName(e){
        this.setState({
            taskname:e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }
    onChangeDuration(e){
        this.setState({
            duration:e.target.value
        });
    }
    onChangeDeadline(date){
        this.setState({
            deadline:date
        });
    }

    onSubmit(e){
        e.preventDefault();
        const task = {
            username:this.state.username,
            description : this.state.description,
            duration : this.state.duration,
            deadline : this.state.deadline
        }
        console.log(task);
        window.location = '/';
    }
    render(){
        return (
            <div>
            <h3>Create New task list</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.taskname}
                    onChange={this.onChangeTaskName}>
                    {
                      this.state.users.map(function(user) {
                        return <option 
                          key={user}
                          value={user}>{user}
                          </option>;
                      })
                    }
                </select>
              </div>
              <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
              </div>
              <div className="form-group">
                <label>Duration (in minutes): </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
      
              <div className="form-group">
                <input type="submit" value="Create task Log" className="btn btn-primary" />
              </div>
            </form>
          </div>
      
        )
    }
}