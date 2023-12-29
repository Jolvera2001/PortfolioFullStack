<script> 
    import * as THREE from 'three';
    import { onMount } from 'svelte';

    onMount( () => {

        const container = document.getElementById("sceneContainer")

        // creating a scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xfac9c2);
        scene.scale.set(0.5, 0.5, 0.5)
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        // creating cube
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial( {color: 0x6a0510});

        // Adding ambient light
        const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
        scene.add(ambientLight);

        // Creating edges
        const edgesGeometry = new THREE.EdgesGeometry(geometry);
        const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 8 }); // Adjust linewidth for thickness
        const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);

        // Adding directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 5); // Color, Intensity
        directionalLight.position.set(1, 1, 1); // Set light position
        scene.add(directionalLight);
        
        // adding cube and edges to scene
        const cube1 = new THREE.Mesh(geometry, material);
        cube1.position.set(-2, 0, 0); // Set position for cube1
        const cube2 = new THREE.Mesh(geometry, material);
        cube2.position.set(0, 0, 0); // Set position for cube2

        scene.add(cube1);
        scene.add(cube2);
        cube1.add(edges);
        cube2.add(edges);

        camera.position.z = 5;
        function animate() {
	        requestAnimationFrame( animate );
            cube1.rotation.y += 0.02;
            cube1.rotation.x += 0.001;
            cube2.rotation.y += 0.02;
            cube2.rotation.x += 0.001;
	        renderer.render( scene, camera );
        }
        animate();
    });
</script>

<div id="sceneContainer">

</div>