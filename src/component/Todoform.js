import React from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap'
const Todoform = (props) => {
    return (
        <div>
            <Form onSubmit={props.addTask}>
                <Row>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Control type="text" onChange = {props.manageTask} value={props.tempTask}  />
                        </Form.Group>
                    </Col>
                    <Col sm={8}>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Col>
                </Row>
                
            </Form>
        </div>
    );
};

export default Todoform;