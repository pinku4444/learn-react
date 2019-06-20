import React, { Component, Fragment } from 'react';
import Header from './component/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import Todo from './component/Todo';
import User from './component/User';
import NotFound from './component/Notfound';
import Post from './component/Post';
import Album from './component/Album';
import ApiTodos from './component/ApiTodos';

import AgeManagement from './component/AgeManagement'
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';


const store = createStore(reducer,devToolsEnhancer());
class App extends Component {
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
									<Route exact path='/' component={Home} />
									<Route path='/todo' component={Todo} />
									<Route path='/user' component={User} />
									<Route path='/post' component={Post} />
									<Route path='/simple-redux' component={AgeManagement} />
									<Route path='/Album' component={Album} />
									<Route path='/todos' component={ApiTodos} />
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