import React, { Component, Fragment } from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./component/Sidebar";
import Home from "./component/Home";
import Todo from "./component/Todo";
import User from "./component/User";
import NotFound from "./component/Notfound";
import Post from "./component/Post";
import Album from "./component/Album";
import ApiTodos from "./component/ApiTodos";

import AgeManagement from "./component/AgeManagement";
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { image } from "./image/index";

const store = createStore(reducer, devToolsEnhancer());
class App extends Component {
  constructor() {
    super();
    this.state = {
        data: [
				{
					id :1,
					path : image.butterFly
				},{
					id:2,
					path : image.flower
				} , {
					id:3,
					path : image.sea
				} 
			],
		duration: 3000,
		currentShowId : 1
    };
  }

  changeCurrentId = () => {
	  let currentShowId = (this.state.currentShowId)+1;
	  if(currentShowId > this.state.data.length) {
		currentShowId = 1;
	  }
	  this.setState({
		currentShowId
	  })

  }
  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={10}>
              <Provider store={store}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (<Home imageData={this.state.data} changeCurrentId={this.changeCurrentId}
					duration={this.state.duration} currentShowId={this.state.currentShowId} />)}
                    
                  />
                  <Route path="/todo" component={Todo} />
                  <Route path="/user" component={User} />
                  <Route path="/post" component={Post} />
                  <Route path="/simple-redux" component={AgeManagement} />
                  <Route path="/Album" component={Album} />
                  <Route path="/todos" component={ApiTodos} />
                  <Route component={NotFound} />
                </Switch>
              </Provider>
            </Col>
          </Row>
        </Router>
      </Fragment>
    );
  }
}

export default App;
