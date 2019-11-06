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
/*
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
*/
//-----------CLASE 8-------------//
/*
function imprimirMayus(persona){
	//Declarar un atributo, con el valor de una key.
	var {nombre} = persona
	console.log(nombre.toUpperCase())
}

imprimirMayus({nombre:'andemar'})



function nombreCompleto(persona){
	var {nombre} = persona
	var {edad} = persona
	console.log(`Hola me llamo ${nombre} y mi edad es de ${edad} anos`)
}

nombreCompleto({nombre: 'ande', edad: 12})
nombreCompleto({nombre: 'mar', edad: 21})
*/

//-----------CLASE 9-------------//
/*
//Con esta funcion, se retorna un nuevo objeto
//Con el cumpleanos cambiado.
var persona = {
	nombre: 'ande',
	edad: 22
}

function cumpleanos(persona){
	return{
		...persona,
		edad: persona.edad+1
	}
}

//Esto retornara un nuevo objeto, con
//la edad+1, del objeto original.
cumpleanos(persona)
*/
//-----------CLASE 10-------------//
/*
var x = 4, y = '4'

//True, debido a que se comprara el valor
//no el tipo.
console.log(x == y)
//False, debido a que se compara el valor
//y el tipo, en este caso int y char.
console.log(x === y)

var pers1 = {
	nombre: 'and'
}

var pers2 = {
	nombre: 'and'
}

//Esto da false, ya que no apuntan al
//mismo lugar en memoria.
console.log(pers1 == pers2)

pers2 = pers1
//Esto da true, ya que apuntan al
//mismo lugar en memoria.
console.log(pers1 == pers2)
*/
//-----------CLASE 11-------------//
/*
var sacha = {
	nombre: 'and',
	apellido: 'mar',
	edad: 22,
	inge: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}

function imprimirProfesiones(persona){
	console.log(`${persona.nombre} es:`)
	
	if(persona.inge){
		console.log('Ingeniero')
	}
	
	if(persona.cocinero){
		console.log('cocinero')
	}
	
	if(persona.cantante){
		console.log('cantante')
	}
	
	if(persona.dj){
		console.log('dj')
	}
	
	if(persona.guitarrista){
		console.log('guitarrista')
	}
	
	if(persona.drone){
		console.log('Vuela drone')
	}
}

function imprimirSiEsMayorDeEdad(persona){
	var res = ""
	
	if(persona.edad >= 18){
		res = `${persona.nombre} es mayor de edad`
	}else{
		res = `${persona.nombre} es menor de edad`
	}
	
	console.log(res)
}

imprimirProfesiones(sacha)
imprimirSiEsMayorDeEdad(sacha)
*/
//-----------CLASE 12-------------//
/*
var ande = {
	nombre: 'ande',
	edad: 22
}

var dean = {
	nombre:'dean',
	edad: 12
}

function esMayorDeEdad(persona){
	return (persona.edad >= 18)
}

function imprimirSiEsMayorDeEdad(persona){
	if(esMayorDeEdad(persona)){
		console.log(`${persona.nombre} es mayor de edad`)
	}else{
		console.log(`${persona.nombre} es menor de edad`)		
	}
}
*/
//-----------CLASE 13-------------//
/*
var ande = {
	nombre: 'ande',
	edad: 22
}

var dean = {
	nombre:'dean',
	edad: 12
}

const MAYORIA_DE_EDAD = 18

////Esta es la forma clasica de la funcion.
//var esMayorDeEdad = function (persona){
//	return (persona.edad >= 18)
//}

//Esta es un arrow function, la cual se guarda la funcion
//en una variable. Como es una funcion que retorna, no necesita return.

//NOMBRE DE LA VAR     PARAMETROS     CUERPO DE LA FUNC
const esMayorDeEdad =  ({edad})=>  edad >= MAYORIA_DE_EDAD
const esMenorDeEdad =  ({edad})=>  edad <= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
	if(esMayorDeEdad(persona)){
		console.log(`${persona.nombre} es mayor de edad`)
	}else{
		console.log(`${persona.nombre} es menor de edad`)		
	}
}


function permitirAcceso(persona){
	if(esMenorDeEdad(persona)){
		console.log("ACCESO DENEGADO")
	}
}
*/
//-----------CLASE 14-------------//
/*
var ande = {
	nombre: 'ande',
	apellido: 'mar',
	edad: 22,
	peso: 82
}

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

console.log(`Al inicio del ano ${ande.nombre} pesa ${ande.peso}kg`)

const aumentarPeso  = persona => persona.peso+=INCREMENTO_PESO
const disminuirPeso = persona => persona.peso-=INCREMENTO_PESO

for(var i = 1; i <= DIAS_DEL_ANIO; i++){
	var random = Math.random()
	if(random < 0.25){
		aumentarPeso(ande)
	}else if(random < 0.5){
		disminuirPeso(ande)
	}
}

//Con .toFixed(#), se mostraran los # decimales, despues de la ,.
console.log(`Al final del ano ${ande.nombre} pesa ${ande.peso.toFixed(1)}kg`)
*/
//-----------CLASE 15-------------//
/*
var ande = {
	nombre: 'ande',
	apellido: 'mar',
	edad: 22,
	peso: 82
}

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365
var dias = 0
//Esto define el peso meta a alcanzar en X dias.
const META = ande.peso-3
const aumentarPeso  = persona => persona.peso+=INCREMENTO_PESO
const disminuirPeso = persona => persona.peso-=INCREMENTO_PESO

const comeMucho 	 = () => Math.random() < 0.30
const realizaDeporte = () => Math.random() < 0.40

console.log(`Al inicio del ano ${ande.nombre} pesa ${ande.peso}kg`)

while(ande.peso > META){
	if(comeMucho()){
	   aumentarPeso(ande)
	}
	if(realizaDeporte()){
		disminuirPeso(ande)
	}
	dias++;
}

console.log(`pasaron ${dias} dias, hasta que ${ande.nombre} adelgazo ${META}kg`)
*/
//-----------CLASE 16-------------//
/*
var contador = 0


const llueve = () => Math.random() < 0.25

do{
	contador++
}while(!llueve())
	
if(contador == 1){
	console.log(`Fui a ver si llovia ${contador} ves`)	
}else
	console.log(`Fui a ver si llovia ${contador} veces`)
*/
//-----------CLASE 17-------------//

//Pregunta al usuario por un dato
var signo = prompt(`¿Cual es tu signo?`)

switch(signo){
	case 'acuario':
		console.log('cosa de acuario')
		break
	case 'piscis':
		console.log('cosa de piscis')
		break
	case 'geminis':
	case 'géminis':
		console.log('Con y sin tilde, geéminis')
		break
	default:
		console.log('Mal')
}































//-----------CLASE 18-------------//
//-----------CLASE 19-------------//
//-----------CLASE 20-------------//
//-----------CLASE 21-------------//
//-----------CLASE 22-------------//
//-----------CLASE 23-------------//

























