import React from 'react';
import {Fetchhoc} from './Fetchhoc';
import {Table} from 'react-bootstrap'

const ApiTodos = (props) => {
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((album, index) => {
                            return (
                                <tr>
                                    <td>{album.id}</td>
                                    <td>{album.title}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Fetchhoc(ApiTodos,"https://jsonplaceholder.typicode.com/todos");