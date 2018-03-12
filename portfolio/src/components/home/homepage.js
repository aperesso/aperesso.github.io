import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';


import './../../stylesheets/css/homepage/homepage.min.css'

import sketch from './sketch'
import Three from './three'
import Menu from './../menu/menu'
import Presentation from './../presentation/presentation'


import mouse from './../../res/mouse.svg'

class Homepage extends Component {

	render() {
		return (
			<div className="Homepage">
				<div className="left" id="left">
					<P5Wrapper className="sketch" sketch={sketch} />
					<h3 className="text"> FRONT END WEB DEVELOPER </h3>
					<h4 className="text"> Alexia Peresson </h4>
				</div>
				<div className="right">
					<Three/>
				</div>

				<img alt="scroll down for more" src={mouse} className="mouse"/>
				<p> scroll down for more </p>

				<Menu/>
				<Presentation/>
			</div>
		);
	}
}


export default Homepage;
