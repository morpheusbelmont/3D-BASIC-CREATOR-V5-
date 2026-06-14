// ============================
// CONEXIÓN INTERFAZ
// ============================



window.onload = ()=>{



// Cambiar figura


document

.getElementById(

"figura"

)

.addEventListener(

"change",

function(){



crearObjeto(

this.value

);



}

);







// Cambiar escala


document

.getElementById(

"escala"

)

.addEventListener(

"input",

function(){



let valor =

Number(

this.value

);




objeto.scale.set(

valor,

valor,

valor

);




actualizarMedidas();



}

);








// Cambiar intensidad luz


document

.getElementById(

"luzControl"

)

.addEventListener(

"input",

function(){



cambiarLuz(

Number(this.value)

);



}

);





};
