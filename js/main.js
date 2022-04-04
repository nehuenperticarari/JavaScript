//crear una clase y metodo.
class costoYinteres{
    constructor(Credito, Cuotas, Intereses){
        this.Credito = Credito;
        this.Cuotas = Cuotas;
        this.Intereses = Intereses;
    }
    
    valorcuota(){
        return (this.Credito/this.Cuotas) + (this.Credito*this.Intereses/100)/this.Cuotas
    }
    totalconinteres(){
        return ((this.Credito/this.Cuotas) + (this.Credito*this.Intereses/100)/this.Cuotas) * this.Cuotas
    }
    interesextra(){
        return (((this.Credito/this.Cuotas) + (this.Credito*this.Intereses/100)/this.Cuotas) * this.Cuotas) - this.Credito
    }
}


//Creando variables y eventos, agregue jquery y animaciones.
let productos= []
let cantproductos = productos.length

$("#botonEnviar").on("click", validacion);
$("#botonCargar").on("click", cargardatos);
$("#botonMostrar").on("click", function(){
    $("#mostrarCreditos").slideDown("slow", mostrarcreditos);
    $("#mostrarCreditos").slideUp(25000);
});

//funcion general
function validacion() {
    let validar = false
    let credito = document.getElementById("credito").value;
    let cuotas = document.getElementById("cuotas").value;
    let interes = document.getElementById("interes").value;

// uso de if para la validacion de campos
    if (credito == "" || cuotas == "" || interes == "") {
        let contenido = "<br><br><br><p id=advertencia> Complete los campos!! </p>";
        document.getElementById("resultado").innerHTML = contenido;
        return false;
    }else{
        validar = true;
        document.getElementById("resultado").innerHTML = "";
    }

// uso de if para agregar los objetos en un array.

    if(validacion = true){
        productos.push(new costoYinteres(credito, cuotas, interes))
        guardardatos()
        

//uso de for para la interaccion DOM a traves de jquery
    for (let product of productos){
        $("#mostrarDatos").empty();
        $("#mostrarDatos").append(`<div><h3>Monto del credito: ${product.Credito}</h3>
                        <p>  Valor total con el interes: ${product.totalconinteres()}</p>
                        <p>  Valor cuota: ${product.valorcuota()}</p></div>`)}
    
    }
}


// Funcion para mostrar los productos de forma procedural conn jquery

function mostrarcreditos(){
    for(let produc of productos){
        $("#mostrarCreditos").append(`<p>${produc.Credito}, 
          interes total:$${produc.interesextra()}</p>`)                              
    }
}

//Local storage y JSON, guardado y carga de datos con jquery

function guardardatos(){
    localStorage.setItem("products", JSON.stringify(productos))
}

function cargardatos(){
    let carga = JSON.parse(localStorage.getItem("products"));
    console.log(carga)
    for (let products of carga){
        $("#datosjson").append( `<div><h3> creditos vistos anteriormente: ${products.Credito}</h3>
                               <p>  Cuotas : ${products.Cuotas}</p>
                               <p>  interes : ${products.Intereses}</p></div>`)} 
                            
}

//Animaciones del DOM                      

$(".nehuenperticarari").animate({  left:'250px',
                                   height:'100px',
                                   width:'100px'   }, 
                                   "slow",
                                   function(){
                                    $( document ).ready(function() {
                                        $("#bienvenido").append( `<h2>${"Gracias por elegirnos"}</h2>`)
                                        
                                    })
                                   }
                                    ) 



