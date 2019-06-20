import styled from 'styled-components';
import {Row,Button} from 'react-bootstrap';

export const CustomHeader = styled(Row) `
    background-color : green;
    color:white;
    min-height:80px;
    padding:20px;
`

export const CustomSideBar = styled.div `
    background-color : black;
    color:white;
    height:100vh;
    display:block;
`
export const CustomSideBarLink = styled.div `
    font-size:25px;
    min-height:50px;
    text-align: center;
`
export const CustomButton = styled(Button) `
    margin : 10px;
    font-size:12px;
`

export const CustomTodoHeader = styled.h4 `
    margin :10px;
    color:${props => props.color ? props.color : "palevioletred"};
`
