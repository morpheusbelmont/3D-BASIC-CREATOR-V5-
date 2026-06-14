// ============================
// CREACIÓN DE OBJETOS 3D
// ============================


let objeto;



function material(){


return new THREE.MeshStandardMaterial({

color:0x00ffff,

transparent:true,

opacity:.85,

roughness:.3

});



}




function crearObjeto(tipo){



if(objeto){


escena.remove(

objeto

);


}





let geo;




if(tipo=="cubo")


geo =
new THREE.BoxGeometry(2,2,2);





if(tipo=="esfera")


geo =
new THREE.SphereGeometry(

1.3,

32,

32

);





if(tipo=="piramide")


geo =
new THREE.ConeGeometry(

1.5,

2,

4

);





if(tipo=="prisma")


geo =
new THREE.CylinderGeometry(

1.4,

1.4,

2,

3

);





if(tipo=="cuadro")


geo =
new THREE.BoxGeometry(

3,.1,3

);





if(tipo=="circulo")


geo =
new THREE.CylinderGeometry(

1.5,

1.5,

.1,

64

);





if(tipo=="esfinge"){


crearEsfinge();

return;


}






objeto =

new THREE.Mesh(

geo,

material()

);





objeto.castShadow=true;





let bordes =

new THREE.LineSegments(


new THREE.EdgesGeometry(

geo

),


new THREE.LineBasicMaterial({

color:0x000000

})


);



objeto.add(

bordes

);





escena.add(

objeto

);




transform.attach(

objeto

);


}








// ESFINGE BÁSICA



function crearEsfinge(){



objeto =

new THREE.Group();





let cabeza =

new THREE.Mesh(

new THREE.SphereGeometry(1),

material()

);



cabeza.scale.y=1.3;



objeto.add(

cabeza

);





let corona =

new THREE.Mesh(

new THREE.BoxGeometry(

2.5,.4,.5

),

material()

);



corona.position.y=1;



objeto.add(

corona

);





escena.add(

objeto

);




transform.attach(

objeto

);



}







function crearGrid(){



let grid =

new THREE.GridHelper(

12,

12,

0x00ffff,

0x333333

);



escena.add(

grid

);




let ejes =

new THREE.AxesHelper(

5

);



escena.add(

ejes

);



}
