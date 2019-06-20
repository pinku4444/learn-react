import React from 'react';
import {connect} from 'react-redux'
const AgeManagement = (props) => {
    return (
        <div>
            <h6>Age : {props.Age}</h6>
            <button onClick={props.onAgeUp}>Age Up</button>
            <button onClick={props.onAgeDown}>Age Down</button>
        </div>
    );
};
const mapsDispatchToprops = (dispatch) => {
        return {
            onAgeUp : () => { dispatch({type:'PAGE_UP'}) },
            onAgeDown : () => { dispatch({type:'PAGE_DOWN'}) }
        }
}

const mapsStateToProps = (state) => {
    return {
        Age:state.Age
    }
}

export default connect(mapsStateToProps,mapsDispatchToprops)(AgeManagement);