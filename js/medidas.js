// ============================
// SISTEMA DE MEDICIÓN
// ============================


function actualizarMedidas(){


if(!objeto)

return;



let caja =

new THREE.Box3()

.setFromObject(

objeto

);



let tamaño =

new THREE.Vector3();



caja.getSize(

tamaño

);




// Conversión educativa

// 1 unidad 3D = 10 cm

let anchoCM =

(tamaño.x * 10)

.toFixed(1);



let altoCM =

(tamaño.y * 10)

.toFixed(1);



let profundoCM =

(tamaño.z * 10)

.toFixed(1);




// Conversión aproximada

let anchoPX =
anchoCM * 10;


let altoPX =
altoCM * 10;


let profundoPX =
profundoCM * 10;





document.getElementById(

"medidas"

).innerHTML =


`

<hr>

📐 MEDIDAS

<br><br>


↔ X ancho:

${anchoCM} cm

/

${anchoPX} px


<br>



↕ Y alto:

${altoCM} cm

/

${altoPX} px


<br>



↗ Z profundidad:

${profundoCM} cm

/

${profundoPX} px

`;


}
