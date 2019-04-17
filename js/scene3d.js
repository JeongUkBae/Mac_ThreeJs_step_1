
// var scene3d = $('#scene3d')
// alert(scene3d.text());
// var CANVAS_WIDTH = 300;
// var CANVAS_HEIGHT = 300;

// // SCENE

// var scene = new THREE.Scene();

// // CAMERA 

// var camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 100);
// camera.position.x = 17;
// camera.position.y = 12;
// camera.position.z = 13;
// camera.lookAt(scene.position);


// // RENDERER

// var renderer = new THREE.WebGLRenderer();
// renderer.setClearColor(0x000, 1.0);
// renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);

// // GEOMETRY & MATERIALS

// var cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
// var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff55ff});
// var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);
// cube.position.z = 4;

// var ballGeometry = new THREE.SphereGeometry(3, 16, 16);
// var ballMaterial = new THREE.MeshPhongMaterial({color: 0x33aaff});
// var ball = new THREE.Mesh(ballGeometry, ballMaterial);
// scene.add(ball);
// ball.position.z = -5;

// var floorGeometry = new THREE.BoxGeometry(30, 1, 30);
// var floorMaterial = new THREE.MeshBasicMaterial({color: 0x656587});
// var floor = new THREE.Mesh(floorGeometry, floorMaterial);
// scene.add(floor);
// floor.position.y = -3;
// floor.receiveShadow = true;

// // LIGHT

// var spot1 = new THREE.SpotLight(0xffffff);
// spot1.position.set(10, 100, -50);
// scene.add(spot1);

// // FINISH SCENE SETUP

// // document.body.appendChild(scene3d.domElement);
// scene3d.appendChild(renderer.render);
// renderer.render(scene, camera);


// ===========================================
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, CANVAS_WIDTH / CANVAS_HEIGHT  
// , 0.1, 1000)

// renderer = new THREE.WebGLRenderer();
// renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT); 
// // /2 로 setSize 사이즈 조절 가능.


// var geometry = new THREE.BoxGeometry(1,1,1);
// var material = new THREE.MeshBasicMaterial({color:0x00ff00});
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube)

// camera.position.z = 5;

// document.body.appendChild(scene3d.render.domElement);


// function animate(){

// 	requestAnimationFrame(animate);

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;
// 	renderer.render(scene, camera);
	
// }

// animate();

// 국민 664,688 원   213,495 원 
// 신한 973,929 원   673,715 원
// 합계 1,638,617 원
// 
// 계좌 290,000 원
// 현금 450,000 원 
// 합계 740,000 원
// 
// 차액 898,617 원