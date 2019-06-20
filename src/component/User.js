import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap'

const User = () => {
    let [data,setData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setData(res.data)
        })
    },[]);
    return (
        <div>
            <h4>List of user :</h4>
            <Table responsive>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user,index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default User;