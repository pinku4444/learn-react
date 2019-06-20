import React from 'react';
import {Table} from 'react-bootstrap';
import {CustomButton} from '../styledcomponent/styledcomponent'
const TaskList = (props) => {
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task Name</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       props.tasks.map((task,index) => {
                           return (
                               <tr key={index}>
                                   <td>{index+1}</td>
                                   <td>{task.taskName}</td>
                                   <td>
                                        <CustomButton onClick = {() => {props.statusHandler(index)}} variant={task.status ? "danger" : "success"}>
                                            {task.status ? "mark as uncomplete" : "mark as complete"}
                                        </CustomButton>
                                        <CustomButton variant="danger" onClick={() => {props.deleteHandler(index)}}>
                                            Delete  
                                        </CustomButton>
                                   </td>
                                   <td>{task.status ? "Completed" : "uncomplete"}</td>
                               </tr>
                           )
                       }) 
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default TaskList;