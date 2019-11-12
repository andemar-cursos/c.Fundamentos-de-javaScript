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
/*
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
*/
//-----------CLASE 18-------------//
/*
var ande = {
	nombre: 'ande',
	apellido: 'mar',
	altura: 1.76
}

var jul = {
	nombre: 'jul',
	apellido: 'io',
	altura: 1.75
}

var sinon = {
	nombre: 'shinon',
	apellido: 'asada',
	altura: 1.61
}



var personas = [ande, jul, sinon]


for(var i = 0; i < personas.length; i++){
	console.log(personas[i].altura)
}
*/
//-----------CLASE 19-------------//
/*
var ande = {
	nombre: 'ande',
	apellido: 'mar',
	altura: 1.76
}

var jul = {
	nombre: 'jul',
	apellido: 'io',
	altura: 1.75
}

var sinon = {
	nombre: 'shinon',
	apellido: 'asada',
	altura: 1.61
}

const alta = 1.70

var personas = [ande, jul, sinon]

const esAlta = ({altura}) => altura >= alta

//Se crea una variable contenedora de los objetos filtrados
//se llama al metodo filter y se pasa por parametors una
//funcion que filtrara el array.
var personasAltas = personas.filter(esAlta)

console.log(personasAltas)
*/
//-----------CLASE 20-------------//
/*
var ande = {
	nombre: 'ande',
	apellido: 'mar',
	altura: 1.76
}

var jul = {
	nombre: 'jul',
	apellido: 'io',
	altura: 1.75
}

var sinon = {
	nombre: 'shinon',
	apellido: 'asada',
	altura: 1.61
}

var personas = [ande, jul, sinon]

////Esto sirve, para cambiar los datos al objeto original
//const alturaToCms = persona =>{
//	persona.altura *= 100
//	return persona
//}

////Este metodo sirve para crear un nuevo objeto con la altura
////Cambiada
//const alturaToCms = persona =>{
//	return{
//		...persona,
//		altura: persona.altura*100
//	}
//}

//Esto es lo mismo de arriba, pero sin return escrito.
const alturaToCms = persona =>({
		...persona,
		altura: persona.altura*100	
})

var personasCms = personas.map(alturaToCms)

console.log(personasCms)
*/
//-----------CLASE 21-------------//
/*
var ande = {
	nombre: 'ande',
	apellido: 'mar',
	altura: 1.76,
	cantidadDeLibros:64
}

var jul = {
	nombre: 'jul',
	apellido: 'io',
	altura: 1.75,
	cantidadDeLibros:53
}

var sinon = {
	nombre: 'shinon',
	apellido: 'asada',
	altura: 1.61,
	cantidadDeLibros:34
}


var personas = [ande, jul, sinon]


//Le llega por parametros el acumulado y el objeto a obtener datos
const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros


//Se pasa por parametros una funcion que define la
//reduccion y el valor inicial.
var totalLibros = personas.reduce(reducer, 0)


console.log(`Todos las personas tienen ${totalLibros} libros`)
*/
//-----------CLASE 22-------------//
/*
const personaAlta = 1.70

//Constructor de persona
function Persona(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

const altura = ({altura}) => {
	if(altura >= personaAlta){
		return 'alta'
	}else
		return 'baja'
}


//Con esta linea creo funciones.
Persona.prototype.saludar = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlta = function(){
	console.log(`Yo ${this.nombre} ${this.apellido}, soy una persona ` + altura(this))
}

//Inicializo la persona=>sinon
var sinon = new Persona('asada', 'shinon', 1.61)
var ande  = new Persona('ande' , 'mar'   , 1.76)

//Llamo a las funcion de sinon 
sinon.saludar()
sinon.soyAlta()
//Llamo a las funciones de ande
ande.saludar()
ande.soyAlta()
*/
//-----------CLASE 25-------------//
/*
function Persona(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

function Desarrollador(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

//Esta funcion, hace la herencia de padre, al hijo
function heredaDe(prototipoHijo, prototipoPadre){
	var fn = function() {}
	fn.prototype = prototipoPadre.prototype
	prototipoHijo.prototype = new fn
	prototipoHijo.prototype.constructor = prototipoHijo
}

Persona.prototype.saludar = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlta = function(){
	console.log(`Yo ${this.nombre} ${this.apellido}, soy una persona ` + altura(this))
}

//Primero se hace la herencia, luego se "pisa" la funcion saludar, para cambiarla
heredaDe(Desarrollador, Persona)

//Esta funcion sobreEscribe la funcion saludar de persona
Desarrollador.prototype.saludar = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}
////////------NO FUNCIONO LA FUNCION SOYALTA------////////
*/
//-----------CLASE 26-------------//
/*
class Persona{
	constructor(nombre, apellido, altura){
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
	}

	saludar(){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
	}
}

//Para heredar de un prototipo se usa extends + prototipo.
class Desarrollador extends Persona{
	constructor(nombre, apellido, altura){
		//Se ---TIENE--- que invocar a super, que es el constructor de la clase padre.
		super(nombre, apellido, altura)
	}
	//Aca se sobre escribe el saludar de la clase padre.
	saludar(){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
	}
}
*/
//-----------CLASE 27-------------//
/*
class Persona{
	constructor(nombre, apellido, altura){
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
	}

	saludar(fn){
		//Esto equivale a:
		var {nombre, apellido} = this
		//Esto de aca.
		//var nombre = this.nombre
		//var apellido = this.apellido
		console.log(`Hola, me llamo ${nombre} ${apellido}`)
		//Si pasaron algun valor en fn, es true
		if(fn){
			fn(nombre, apellido, false)
		}
	}
}

//Para heredar de un prototipo se usa extends + prototipo.
class Desarrollador extends Persona{
	constructor(nombre, apellido, altura){
		//Se ---TIENE--- que invocar a super, que es el constructor de la clase padre.
		super(nombre, apellido, altura)
	}
	//Aca se sobre escribe el saludar de la clase padre.
	saludar(fn){
		//Esto equivale a:
		var {nombre, apellido} = this
		//Esto de aca.
		//var nombre = this.nombre
		//var apellido = this.apellido
		console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
		if(fn){
			fn(nombre, apellido, true)
		}
	}
}


function responderSaludo(nombre, apellido, esDev){
	console.log(`Buen dia ${nombre} ${apellido}`)
	if(esDev){
		console.log(`Ah mira, no sabia que eras dev`)
	}
}


var ande  = new Persona('ande' , 'mar'   , 1.76)
var sinon = new Desarrollador('asada', 'shinon', 1.61)


ande.saludar(responderSaludo)
sinon.saludar(responderSaludo)
*/
//-----------CLASE 29-------------//
/*
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const swUrl=`${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = {crossDomain: true}

//Arraw Function | El name llega del objeto obtenido del $.get
const saludoPj = ({name}) => console.log(`Hola, soy ${name}`)

////Clasic function
//const saludoPj = function(Pj){
//	console.log(console.log(`Hola, soy ${Pj.name}`))
//}

//Se pasa por parametros la url de la API
//Las opciones, donde se define que la API esta en una web 3ra
//La funcion que "tratara" los datos obtenidos.
//Llegan 3 datos, 1. un objeto con los datos. 2. Un estado en string. 3. un jqXHR
$.get(swUrl, opts, saludoPj)
*/
//-----------CLASE 30-------------//
/*
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

const saludoPj = ({name}) => console.log(`Hola, soy ${name}`)

function obtenerPj(id){
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	$.get(url, opts, saludoPj)
}

obtenerPj(1)
obtenerPj(2)
obtenerPj(3)
obtenerPj(4)
*/
//-----------CLASE 31-------------//
/*
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function obtenerPj(id, callback){
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	
	//Arrow Function
	$.get(url, opts, callback)
	 .fail(() => {
		console.log(`Sucedio un error. No se puedo obtener el pj ${id}`)
	})
	
	////Classic function
//	$.get(url, opts, callback).fail(function(){
//		console.log(`Sucedio un error. No se puedo obtener el pj ${id}`)
//	})
}

//-----CALLBACK-HELL'S-----//
obtenerPj(1, function(pj){
	console.log(`Hola, soy ${pj.name}`)
	
	obtenerPj(2, function(pj){
		console.log(`Hola, soy ${pj.name}`)
		
		obtenerPj(3, function(pj){
			console.log(`Hola, soy ${pj.name}`)
			
			obtenerPj(4, function(pj){
				console.log(`Hola, soy ${pj.name}`)
			})
		})
	})
})
*/
//-----------CLASE 33-------------//
/*
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function obtenerPj(id){
	
	return new Promise((resolve, reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		
		$.get(url, opts, function(data){
			resolve(data)
		})
		.fail(() => reject(id))
	})
	
}


function onError(id){
	console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPj(1)
	.then(function(pj){
		console.log(`El personaje 1 es ${pj.name}`)
	})
	//Con esta linea, se ejecuta la funcion onError, pasando los
	//parametros automaticamente.
	.catch(onError)
*/
//-----------CLASE 34-------------//
/*
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function obtenerPj(id){
	
	return new Promise((resolve, reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		
		$.get(url, opts, function(data){
			resolve(data)
		})
		.fail(() => reject(id))
	})
	
}


function onError(id){
	console.log(`Sucedio un error al obtener el personaje ${id}`)
}

//Los parametros pj[1-4] pueden ser llamados igual, son != por ilustracion
obtenerPj(1)
	.then(pj1 => {
		console.log(`El personaje 1 es ${pj1.name}`)
		return obtenerPj(2)
	})
	.then(pj2 => {
		console.log(`El personaje 2 es ${pj2.name}`)
		return obtenerPj(3)
	})
	.then(pj3 => {
		console.log(`El personaje 3 es ${pj3.name}`)
		return obtenerPj(4)
	})
	.then(pj4 => {
		console.log(`El personaje 4 es ${pj4.name}`)
	})
	.catch(onError)
*/
//-----------CLASE 35-------------//
/*
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function obtenerPj(id){
	return new Promise((resolve, reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		
		$.get(url, opts, function(data){
			resolve(data)
		})
		.fail(() => reject(id))
	})
}

function onError(id){
	console.log(`Sucedio un error al obtener el personaje ${id}`)
}


//Arreglo con los id's de los personajes
var ids = [1,2,3,4,5,6,7]

//Arrow Function
var promesas = ids.map(id => obtenerPj(id))
Promise
	.all(promesas)
	.then(personajes => console.log(personajes))
	.catch(onError)




////Classic function
//var promesas = ids.map(function (id){
//	return obtenerPj(id)
//})
*/
//-----------CLASE 36-------------//
/*
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function obtenerPj(id){
	return new Promise((resolve, reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		
		$.get(url, opts, function(data){
			resolve(data)
		})
		.fail(() => reject(id))
	})
}

function onError(id){
	console.log(`Sucedio un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes(){
	var ids = [1,2,3,4,5,6,7]
	var promesas = ids.map(id => obtenerPj(id))
	try{
		var personajes = await Promise.all(promesas)
		console.log(personajes)
	}catch(id){
		onError(id)
	}
}

obtenerPersonajes()
*/
//--------------TEST HOISTING-----------//

let test = 'x'

function prueba(){
	console.log(test)
	let test = 'y'
}

prueba()























