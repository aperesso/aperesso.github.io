import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import menu_svg from './../../res/menu.svg'
import './../../stylesheets/css/menu/menu.min.css'
import $ from 'jquery';

class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = {isToggleOn: false};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		var current_state = this.state.isToggleOn;
		if (!current_state) {
			$(".menu_panel").animate({
				left: "0vW"
			}, 2000);
		}
		else {
			$(".menu_panel").animate({
				left: "100vW"
			}, 2000);
		}
		this.setState({
			isToggleOn: !current_state
		})
		console.log(this.state);
	}

	render() {
	return (
		<div className="Menu">
			<img alt="menu" src={menu_svg} className="menu" onClick={this.handleClick.bind(this)}/>
			<div className="menu_panel">
				<div className="menu_left_wrapper">
					<Link to="/"> <h2> home </h2> </Link>
					<Link to="/about"><h2> get to know me</h2></Link>
					<Link to="/contact"><h2> contact </h2></Link>
				</div>
				<div className="menu_project_wrapper">
					<div className="project_content">
						<Link to="/Loader"> <h2> Smokin' hot ! </h2></Link>
						<Link to="/"> <h2> Is it a doll house ? </h2></Link>
						<Link to="/"> <h2> This desk is flat </h2></Link>
					</div>
				</div>


			</div>
		</div>
	);
	}
}

export default Menu;
