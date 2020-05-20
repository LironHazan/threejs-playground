const ROWS = 20;
const BLOKS_PER_ROW = 3;

export class SceneOne {
    #scene;
    #camera;
    #renderer;

    update() {
        requestAnimationFrame( () => this.update );
        this.#renderer.render( this.#scene, this.#camera );
    }

    resize() {
        this.#camera.aspect = window.innerWidth / window.innerHeight;
        this.#camera.updateProjectionMatrix();
        this.#renderer.setSize( window.innerWidth, window.innerHeight );
    }

    init() {
        this.#scene = new THREE.Scene();
        this.#camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.#camera.position.set(0, 3, 10);

        const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820);
        this.#scene.add(ambient);

        const light = new THREE.DirectionalLight(0xFFFFFF, 1);
        light.position.set( 1, 10, 6);
        this.#scene.add(light);

        this.#renderer = new THREE.WebGLRenderer();
        this.#renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.#renderer.domElement );

        const controls = new THREE.OrbitControls( this.#camera, this.#renderer.domElement );
        controls.target.set(0,4,0);
        controls.update();

        //meshes here
        const height = 0.4;
        const geometry = new THREE.BoxGeometry(3, height, 0.9);
        const material = new THREE.MeshLambertMaterial({ color: 0xdcbb7c });
        const mesh = new THREE.Mesh( geometry, material);

        for (let row = 0; row < ROWS; row++) {
            let yPos = row * ( height + 0.05);
            let offset = -1;
            for(let count=0; count < BLOKS_PER_ROW; count++){
                const block = mesh.clone();
                if (row % 2){
                    block.rotation.y = Math.PI/2; // 90 deg
                    block.position.set(offset, yPos, 0);
                } else{
                    block.position.set(0, yPos, offset);
                }
                this.#scene.add(block);
                offset++;
            }
        }

     //   window.addEventListener( 'resize', resize, false);

        this.update();
    }
}
