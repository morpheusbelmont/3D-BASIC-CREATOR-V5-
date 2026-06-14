// ============================
// CONTROLES TIPO BLENDER
// ============================


let orbit;

let transform;




function crearControles(){



orbit =

new THREE.OrbitControls(

camara,

renderer.domElement

);




orbit.enableDamping=true;





transform =

new THREE.TransformControls(

camara,

renderer.domElement

);




escena.add(

transform

);





transform.addEventListener(

"dragging-changed",

(e)=>{


orbit.enabled =
!e.value;


}

);


}







function modo(tipo){


transform.setMode(

tipo

);


}
