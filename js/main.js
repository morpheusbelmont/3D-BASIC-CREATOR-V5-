// ============================
// MOTOR PRINCIPAL
// ============================


let escena =
new THREE.Scene();


escena.background =
new THREE.Color(0x08111f);



let camara =
new THREE.PerspectiveCamera(

60,

window.innerWidth /
window.innerHeight,

0.1,

1000

);


camara.position.set(
6,5,8
);



// RENDER


let renderer =
new THREE.WebGLRenderer({

antialias:true

});


renderer.setSize(

innerWidth,

innerHeight

);


renderer.shadowMap.enabled=true;



document.body.appendChild(

renderer.domElement

);



// CARGAR SISTEMAS


crearLuces();

crearControles();

crearGrid();

crearObjeto("cubo");




// ANIMACIÓN


function animar(){


requestAnimationFrame(animar);


orbit.update();


actualizarMedidas();



renderer.render(

escena,

camara

);


}



animar();




// RESPONSIVE


window.addEventListener(

"resize",

()=>{


camara.aspect =

innerWidth /

innerHeight;


camara.updateProjectionMatrix();



renderer.setSize(

innerWidth,

innerHeight

);


}

);
