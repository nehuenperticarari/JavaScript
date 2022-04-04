// pagina contacto
//creacion de una clase
class datos{
    constructor(nombre, email, telefono, consulta){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.consulta = consulta
    }    
 
}
//creacion de variable y evento.
let datosi = []
$("#botonenviar").on("click", validar)
//crear variable para AJAX
let APIURL = 'https://jsonplaceholder.typicode.com/posts'

//Funcion para enviar, guardar datos
function validar(){
    let validar2 = false;
    let nombre = $("#nombre").val();
    let email = $("#email").val();
    let telefono = $("#telefono").val();
    let consulta = $("#Consultas").val();

    if (nombre == "" || email == "" || telefono == "" || consulta == "") {
        let contenido = "<br><br><br><p id=advertencia> Complete los campos!! </p>";
        document.getElementById("completar").innerHTML = contenido;
        validar2=false;
    }else{
        document.getElementById("completar").innerHTML = "";   
        validar2 = true;
         
    }
//AJAX, JQUERY
    if(validar2 = true){
        datosi.push(new datos(nombre, email, telefono, consulta))
        console.log(datosi)
        $.ajax({
            method: "POST",
            url:  APIURL,
            data: datosi,
            success: function(){
                $("#completar").append(`<div><h3>Nos comunicaremos contigo: ${nombre}</h3>`);
            }
        });
}}


//animaciones
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


