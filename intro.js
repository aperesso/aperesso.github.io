var tl = new TimelineMax();
var text_1 = $('#text_1');

var string = "I love to craft beautiful web templates and stunning web animations";

var ch = $('#char');
tl.to(text_1, 5, {
  opacity: 1,
  transform: 'translateY(-5px)',
  ease: Bounce.easeOut
});
type_effect(text_2, 80);

function type_effect(element, speed) {
	var text = $(element).text();
	$(element).html('');

	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}

var scene, camera, renderer, direction,
    planet, skeleton, particle_count, particles, particle, points;

var last_pos;
var intro = 1;

function init() {

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set(0, 0, 500);
  camera.speed = 0.9;
  camera.turn_speed = 0.0006;

  planet = new THREE.Mesh(
    new THREE.IcosahedronGeometry(80,1),
    new THREE.MeshPhongMaterial({
      color: 0xdca0de,
      specular: 0x050505,
      shininess: 100,
      wireframe: false})
  );

  planet.castShadow = true;
  planet.light = true;
  planet.receiveShadow = true;
  scene.add(planet);

  skeleton = new THREE.Mesh(
    new THREE.IcosahedronGeometry(90,1),
    new THREE.MeshPhongMaterial({
      color: 0xdca0de,
      specular: 0x050505,
      shininess: 100,
      wireframe: true})
  );
  scene.add(skeleton);

  particle_count = 30000;
  particles = new THREE.Geometry();
  for (var i = 0; i < particle_count; i++) {
    var px = Math.random() * 2000 - 1000;
    var py = Math.random() * 2000 - 1000;
    var pz = Math.random() * 2000 - 1000;
    particle = new THREE.Vector3(px,py,pz);
    particles.vertices.push(particle);
  }

  points = new THREE.Points(
    particles,
    new THREE.PointsMaterial({
      color: 0xfafafa,
      size: 1.5,
      transparent: true,
      depthTest: true,
      blending: THREE.AdditiveBlending
    }));

  points.castShadow = true;
  points.receiveShadow = true;

  scene.add(points);

  var light = new THREE.AmbientLight( 0xfafafa,1); // soft white light
  scene.add( light );
  var pointLight = new THREE.PointLight( 0xff0000, 1, 300, 2 );
  pointLight.position.set( 100, 100, 70 );
  pointLight.castShadow = true;
  scene.add( pointLight );

  scene.fog = new THREE.FogExp2('#eeeeee', 0.00001);

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true });
  renderer.sortObjects = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMAp;

  document.getElementById('container').appendChild(renderer.domElement);
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  planet.rotation.x += 0.001;
  planet.rotation.y += 0.002;
  points.rotation.z += 0.002;


  if (camera.position.z >=80) {
    camera.position.x += Math.sin(camera.rotation.y) * camera.speed;
    camera.position.z += -Math.cos(camera.rotation.y) * camera.speed;
  }

  if (camera.position.z <80) {
    $('#container').remove();
  }

  skeleton.rotation.x += 0.001;
  skeleton.rotation.y += 0.002;
  renderer.render(scene,camera);
}

window.addEventListener( 'resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  if (renderer) {
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render(scene,camera);
  }
}, false );



window.addEventListener('mousemove', function(event){
  if (last_pos) {
    var delta_x = last_pos.x - event.clientX;
    var delta_y = last_pos.y - event.clientY;

    if (Math.abs(delta_x) > Math.abs(delta_y) && delta_x > 0) {
      direction = "left";
    }
    else if (Math.abs(delta_x) > Math.abs(delta_y) && delta_x < 0) {
      direction = "right";
    }
    else if (delta_y > 0) {
      direction = "up";
    }
    else {
      direction = "down";
    }
  }
  else {
    last_pos = new THREE.Vector2();
  }
  last_pos.setX(event.clientX);
  last_pos.setY(event.clientY);
})

window.onload = init;
