import React from 'react';
import Hoc from './Hoc';
import { Table } from 'react-bootstrap'
const Post = (props) => {
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((post, index) => {
                            return (
                                <tr key={index}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Hoc(Post, "https://jsonplaceholder.typicode.com/posts");