// JavaScript Document


//----------STRINGS-----------//
/*
var nombre = 'Sacha'
var apellido = 'Asada'

var nombreMayus = nombre.toUpperCase()
var apellidoMin = apellido.toLowerCase()

var primeraLetraNombre = nombre.charAt(0);
var cantidadLetrasNombre = nombre.length
var nombreCompleto = nombre + ' ' + apellido;
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`


var str = nombre.charAt(1) + nombre.charAt(2)
var str2 = nombre.substr(1,2)
*/

//-----------NUMEROS-----------//
/*
var edad = 27

var precioVino = 200.3

//Al realizar esta operacion el resultado sera "600.9000000000001"
//var total = precioVino * 
//Por tal reazon se realiza de la siguente manera.
//Esto sirve para 1 decial, pero si son mas, no.
var total = precioVino * 100 * 3 / 100
//Si son mas se usa la siguiente linea
var total = Math.round(precioVino * 100 * 3) / 100

//Operacion para transformar a string con dos decimales
var totalStr = total.toFixed(3)
//Pasar de string a float
var total2 = parseFloat(totalStr)
*/
//-----------CLASE 5-------------//
/*
var nombre = 'Sacha', edad = 28

function imprimirEdad(n, e){
	console.log(`${n} tiene ${e} anos`)
}


imprimirEdad()
*/
//-----------CLASE 6 y 7-------------//
/*
var nombre = 'Sacha'

function imprimirMayus(n){
	n = n.toUpperCase()
	console.log(n)
}

imprimirMayus(nombreSacha.nombre)
*/
//-----------CLASE 7-------------//

var nombreSacha = {
	nombre: 'ande',
	apellido: 'mar',
	edad: 28
}

//Esta funcion es la clasica
//function imprimirMayus(persona){
//	var nombre = persona.nombre.toUpperCase()
//	console.log(nombre)
//}

//Esta funcion, saca el atributo nombre del objeto.
function imprimirMayus({nombre}){
	nombre = nombre.toLocaleUpperCase()
	console.log(nombre)
}

//Forma clasica de pasar un valor como objeto
imprimirMayus(nombreSacha)
//Forma nueva de pasar un valor como objeto
imprimirMayus({nombre: 'pepito'})

















