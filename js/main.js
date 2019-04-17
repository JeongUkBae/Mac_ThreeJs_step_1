var app = app || {}
app = (()=>{
	let init=()=>{
		onCreate();
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		alert('main js 진입')
	
			
	};

	let box_test=()=>{

		alert('box_test :: 진입')
		let scene = new THREE.Scene();
		let camera = new THREE.PerspectiveCamera(75, window.innerWidth / 
		window.innerHeight, 0.1, 1000)

		let renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerHeight, window.innerHeight); 
		// /2 로 setSize 사이즈 조절 가능.
		document.body.appendChild(renderer.domElement);

		let geometry = new THREE.BoxGeometry(1,1,1);
		let material = new THREE.MeshBasicMaterial({color:0x00ff00});
		let cube = new THREE.Mesh(geometry, material);
		scene.add(cube)

		camera.position.z = 5;
		

		
		
	};
	


return {init:init, box_test:box_test}
})();


function animate(){

	requestAnimationFrame(app.animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}
