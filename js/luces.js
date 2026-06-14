// ============================
// SISTEMA DE ILUMINACIÓN
// ============================


let luz;



function crearLuces(){



let ambiente =

new THREE.AmbientLight(

0xffffff,

0.4

);



escena.add(

ambiente

);




luz =

new THREE.DirectionalLight(

0xffffff,

2

);



luz.position.set(

5,10,5

);



luz.castShadow=true;



escena.add(

luz

);




// PISO SOMBRA



let piso =

new THREE.Mesh(

new THREE.PlaneGeometry(

20,20

),

new THREE.ShadowMaterial({

opacity:.35

})

);



piso.rotation.x =

-Math.PI/2;



piso.receiveShadow=true;



escena.add(

piso

);



}







function cambiarLuz(valor){


luz.intensity = valor;


}
