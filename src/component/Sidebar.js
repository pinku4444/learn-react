import React from 'react';
import {Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import ColorLine from './ColorLine'
import {CustomSideBar,CustomSideBarLink} from '../styledcomponent/styledcomponent'

const Sidebar = () => {
    return (
        <CustomSideBar>
            <Nav  className="flex-column">
                <CustomSideBarLink>
                    <NavLink to='/'>
                        <i className="fa fa-home"></i><br />
                        Home
                    </NavLink>
                </CustomSideBarLink>
                <ColorLine color="white" />

                <CustomSideBarLink>
                <NavLink to='/todo'>
                    <i className="fa fa-dashboard"></i><br />
                    Todo
                </NavLink>
                </CustomSideBarLink>

                <ColorLine color="white" />

                <CustomSideBarLink>
                    <NavLink to='/user'>
                        <i className="fa fa-user"></i><br />
                        User
                     </NavLink>
                </CustomSideBarLink>
                <ColorLine color="white" />
                <CustomSideBarLink>
                    <NavLink to='/post'>
                        <i className="fa  fa-address-card"></i><br />
                        Post
                     </NavLink>
                </CustomSideBarLink>
                <ColorLine color="white" />
                <CustomSideBarLink>
                    <NavLink to='/simple-redux'>
                        <i className="fa  fa-address-card"></i><br />
                        Simple Redux
                     </NavLink>
                </CustomSideBarLink>
                <ColorLine color="white" />
                <CustomSideBarLink>
                    <NavLink to='/Album'>
                        <i className="fa  fa-address-card"></i><br />
                        Album
                     </NavLink>
                </CustomSideBarLink>
                <ColorLine color="white" />
                <CustomSideBarLink>
                    <NavLink to='/todos'>
                        <i className="fa  fa-address-card"></i><br />
                        Todos
                     </NavLink>
                </CustomSideBarLink>
                <ColorLine color="white" />
            </Nav>
        </CustomSideBar>
    );
};

export default Sidebar;