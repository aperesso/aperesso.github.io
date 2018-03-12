import React, { Component } from 'react';
import {
	HashRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import Homepage from './components/home/homepage'
import Contact from './components/contact/contact'
import About from './components/about/about'
import Loader from './components/projects/loader'
import Dollhouse from './components/projects/dollhouse'

class App extends Component {
  render() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={Homepage}/>
				<Route exact path="/contact" component={Contact}/>
				<Route exact path="/about" component={About}/>
				<Route exact path="/loader" component={Loader}/>
				<Route exact path="/dollhouse" component={Dollhouse}/>
			</div>
		</Router>
	);
	}
}

export default App;
