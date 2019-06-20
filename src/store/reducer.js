
const intialState = {
    Age :20
}

const reducer = (state=intialState,Action) => {
    let newState = {...state};
    if(Action.type == "PAGE_UP") {
        newState.Age = newState.Age+1;
    }
    if(Action.type == "PAGE_DOWN") {
        newState.Age = newState.Age-1;
    }
    return newState;
}

export default  reducer;