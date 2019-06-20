import React from 'react';
import {CustomHeader} from '../styledcomponent/styledcomponent';
import {Col} from 'react-bootstrap'
const Header = () => {
    return (
        <div>
            <CustomHeader>
                <Col md={6}>
                    <h4>React App</h4>
                </Col>
                <Col md={3}>
                </Col>
                <Col md={3}>
                    <h4>Welcome,Pinku</h4>
                </Col>
            </CustomHeader>
        </div>
    );
};

export default Header;