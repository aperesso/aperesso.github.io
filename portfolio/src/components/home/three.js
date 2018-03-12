import React, { Component } from 'react';
import * as THREE from 'three';

class Three extends Component {


	// var lrender = function(mesh, start, scene, camera, renderer, mat) {
	// 	mat.uniforms[ 'time' ].value = .00025 * ( Date.now() - start );
	// 	renderer.render(scene, camera);
	// 	requestAnimationFrame( _render );
	// }

	componentDidMount() {
		var scene, camera, renderer;
		var mesh, geo, mat;
		var start;


		start = Date.now();
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth * 0.5 / window.innerHeight, 0.1, 1000 );
		renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		});

		camera.position.z = 50;
		renderer.setSize( window.innerWidth / 2, window.innerHeight );
		this.refs.anchor.appendChild(renderer.domElement);
		renderer.setPixelRatio( window.devicePixelRatio );

		geo = new THREE.IcosahedronGeometry(20, 5);
		mat = new THREE.ShaderMaterial({
			uniforms: {
				time: {
					type: 'f',
					value: 0.0
				}
			},
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'fragmentShader').textContent,
			wireframe: true
		})
		mesh = new THREE.Mesh(geo, mat);
		scene.add(mesh);

		function loop() {
			mat.uniforms[ 'time' ].value = .00025 * ( Date.now() - start );
			renderer.render(scene, camera);
			requestAnimationFrame( loop );
		}
		loop();

	}

	render() {
		const style = {
			width: window.innerWidth/2,
			height: window.innerHeight,
		}
		return(
			<div className='anch' ref='anchor' style={style}>
			</div>
		)
	}
}

export default Three;
