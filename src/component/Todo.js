import React, { Component } from 'react';
import TaskList from './TaskList';
import Todoform from './Todoform';
import { ToastContainer, toast } from 'react-toastify';
import {CustomTodoHeader} from '../styledcomponent/styledcomponent';
import 'react-toastify/dist/ReactToastify.css';



class Todo extends Component {
    constructor() {
        super();
        this.state = {
            "task" : [
                {
                    taskName : "Wakeup",
                    status : false
                },
                {
                    taskName : "BreakFast",
                    status : false
                },
                {
                    taskName : "Office",
                    status : false
                }
            ],
            "tempTask" : ''
        }
    }
    deleteHandler = (index) => {
        let task = this.state.task;
        task.splice(index,1);
        this.setState({
            task:task
        })

    }
    statusHandler = (index) => {
        let task = this.state.task;
        task[index].status = ! task[index].status;
        this.setState({
            task:task
        })

    }

    manageTask = (evt) => {
        this.setState( {
            tempTask : evt.target.value
         }
        )
    }
    addTask = (evt) => {
        evt.preventDefault();
        if(this.state.tempTask === "") {
            toast.error("TaskName Can't be empty!");
            return true;
        }
        let task = this.state.task;
        task.push({taskName:this.state.tempTask,status:false});
        this.setState({
           task,
           tempTask :''
        })

    }
    render() {
        return (
            <div>
                <CustomTodoHeader color="blue">
                    To do Page
                </CustomTodoHeader>
                <Todoform tempTask={this.state.tempTask} addTask={this.addTask} manageTask={this.manageTask} />
                <TaskList tasks={this.state.task} statusHandler={this.statusHandler} deleteHandler={this.deleteHandler}  />
                <ToastContainer />

            </div>
        );
    }
}

export default Todo;