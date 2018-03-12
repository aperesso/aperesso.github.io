import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';


import './../../stylesheets/css/contact/contact.min.css'

import sketch from './../home/sketch'
import Menu from './../menu/menu'
import mail from './../../res/mail.svg'


class Contact extends Component {

	render() {
	return (
		<div className="Contact">
			<div className="left _contact" id="left">
				<P5Wrapper className="sketch" sketch={sketch} />
				<h3> Contact Me </h3>
				<h4> I am so glad to hear from you </h4>
				<a href="mailto:aperesso@student.42.fr">
					<img alt="Mail" src={mail} className="mail"/>
				</a>
			</div>
			<Menu/>
		</div>
	);
	}
}

export default Contact;
