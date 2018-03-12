import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import './../../stylesheets/css/presentation/presentation.min.css'
import $ from 'jquery';

class Presentation extends Component {

	componentDidMount() {

		var scroll;
		var h = window.innerHeight;

		window.addEventListener('scroll', function(){

			var first_item, second_item, third_item;

			first_item = $(".presentation_wrapper")[0];
			second_item = $(".presentation_wrapper")[1];
			third_item = $(".presentation_wrapper")[2];

			scroll = $(document).scrollTop();

			$(".left .text").css("opacity", function() {
				return (1 - (scroll * 2 / h))
			})
			if (scroll < h )
				$(first_item).css("opacity", function(){
					return (scroll * 2 / h - 1);
				})
			else if (scroll < 1.5 * h )
				$(first_item).css("opacity", function(){
					return ( scroll * -2 / h + 3);
				})

			if (scroll < 1.5 * h)
				$(second_item).css("opacity", "0")
			else if (scroll < 2 * h)
				$(second_item).css("opacity", function(){
					return ( 2 * scroll / h - 3);
				})
			else if (scroll < 2.5 * h)
			{
				$(second_item).css("opacity", function(){
					return ( -2 * scroll / h + 5);
				})
			}

			if (scroll < 2.5 * h)
				$(third_item).css("opacity", 0)
			if (scroll < 3 * h)
				$(third_item).css("opacity", function(){
					$(third_item).css("opacity", function(){
						return (2 * scroll / h - 5);
					})
				})
		})

	}
	render() {
		return (
			<div className="Presentation">
				<div className="presentation_wrapper">
					<div className="presentation_content">
						<h2> Hello ! I am Alexia, a french Parisian front-end developer
						<br/> I like to craft beautiful designs and stunning animations made for the web</h2>
						<br/> <h3> This website was built with ❤ in React </h3>
					</div>
				</div>
				<div className="presentation_wrapper ">
					<div className="presentation_content">
						<h3> UX/UI </h3>
						<h3> WebGL </h3>
						<h3> Processing </h3>
						<h3> React </h3>
						<h3> GSAP </h3>
						<h3> Blender </h3>
						<h3> Illustrator </h3>
						<h3> Node </h3>
					</div>
				</div>
				<div className="presentation_wrapper">
					<div className="presentation_content">
						<Link to="/about"><h2> Want to know more about me ?</h2></Link>
					</div>
				</div>
			</div>
		);
	}
}

// <div className="Presentation">
// 	<h2> Hello ! I am Alexia a french Parisian front-end developer</h2>
// 	<h2> I like to craft beautiful designs and stunning animations made for the web</h2>
// 	<h3> This website was built with ❤ in React </h3>
// 	<h1> UX/UI </h1>
// 	<h1> WebGL </h1>
// 	<h1> Processing </h1>
// 	<h1> React </h1>
// 	<h1> GSAP </h1>
// 	<h1> Blender </h1>
// 	<h1> Illustrator </h1>
// 	<h1> Node </h1>
// 	<h2> Want to know more about me ?</h2>
// </div>


export default Presentation;
