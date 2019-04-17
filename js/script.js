function init() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    //For bouncing balls;
    var step = 0;
    renderer.setClearColor(0xEEEEEE);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    //Show Axis
    var axes = new THREE.AxisHelper(10);
    scene.add(axes);

    //Let's make a plane
    var planeGeometry = new THREE.PlaneGeometry(30,30,1,1);
    var planeMaterial = new THREE.MeshPhongMaterial({color: 0xCCCCCC,
     side: THREE.DoubleSide});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.y = 0; //* Math.PI;
    scene.add(plane);

    //Let's make a spheres. *****
    var sphereGeometry = new THREE.SphereGeometry(4,32,32);
    var sphereMeterial = new THREE.MeshPhongMaterial({color: 0x442DF4,
    side: THREE.DoubleSide});
    var sphere = new THREE.Mesh(sphereGeometry, sphereMeterial);
    sphere.castShadow = true;
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;
    scene.add(sphere);  

    //camera controll
    cameraControls = new THREE.OrbitControls( camera, renderer.domElement );

	//cameraControls.addEventListener( 'change', render );
   
    var spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(40,60,30);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 5120;
    spotLight.shadow.mapSize.height = 5120;
    scene.add(spotLight);
    camera.position.x = 0;
    camera.position.y = 30;
    camera.position.z = 30;
    camera.lookAt(scene.position);  
    document.getElementById("threejs_scene").appendChild(renderer.domElement);
    // renderScene();
    var renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        //sphere animation  
        step = 0.1;
       // sphere.position.y = 0// + (5 * Math.cos(step));
  
        renderer.render(scene,camera);
    }
}
window.onload = init();