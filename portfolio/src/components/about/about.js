import React, { Component } from 'react';


import './../../stylesheets/css/about/about.min.css'

import Three from './../home/three'
import Menu from './../menu/menu'



class About extends Component {

	render() {
	return (
		<div className="About">
			<div className="about">
				<h2> GET TO KNOW ME </h2>
				<div className="qa_wrapper">
					<p> Q : Three ajdectives to describe yourself ?</p>
					<p> A : Geeky, fashionable and passionate ! </p>
				</div>

				<div className="qa_wrapper">
					<p> Q : Your favorite movie quote ?</p>
					<p> A : "On wednesday we wear pink !" </p>
				</div>

				<div className="qa_wrapper">
					<p> Q : If you were an animal, what would it be ?</p>
					<p> A : Probably on the world extinction list and too clumsy to survive long </p>
				</div>

				<div className="qa_wrapper">
					<p> Q : Where do you see yourself in 50 years ?</p>
					<p> A : Cheating on bingo in my retirement home where I was put for going senile</p>
				</div>

				<div className="qa_wrapper">
					<p> Q : You have to go on a desert island and you can only bring three things with you ...</p>
					<p> A : My unicorn pajamas, my rubik's cube and my computer</p>
				</div>
				<a href="mailto:aperesso@42.student.fr">
					<h4> I hope you are still here and starting to like me !  Don't be shy, send me an email ! :)</h4>
				</a>
			</div>
			<div className="right">
				<Three/>
			</div>
			<Menu/>
		</div>
	);
	}
}

export default About;
