

const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde   = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego{
	constructor(){
		this.inicializar()
		this.generarSecuencia()
		this.siguienteNivel()
	}
	
	inicializar(){
		//Con esta linea se expecifica que el this, siempre sera el juego mismo.
		this.elegirColor = this.elegirColor.bind(this)
		btnEmpezar.classList.add('hide')
		this.nivel = 1
		//Es un array de 'colores' los cuales son los div de html que forman el circulo.
		//Al llamarse del mismo modo, no se necesita hacer 'celeste: celeste'
		//Siendo el primer celeste la key y el segundo el valor a añadir.
		this.colores = {
			celeste,
			violeta,
			naranja,
			verde
		}
	}
	
	generarSecuencia(){
		//Con new array(10).fill(0) se crea un array de 10 posiciones, donde cada contenido es 0.
		//con map(---) Se sustituyen los datos de las posiciones del array, dependiendo de ---.
		// n =>
		// Math.floor(---) Redondea el valor a la cota inferior.
		//Math.random() * 4, generara un valor numerico entre 0 y 3.99...9.
		//Lo que hace, es guardar 10 numeros aleatorios del 0-3
		this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
	}
	
	siguienteNivel(){
		this.iluminarSecuencia()
		this.agregarEventosClick()
	}
	
	transformarNumeroAColor(numero){
		switch (numero){
			case 0:
				return 'celeste'
			case 1:
				return 'violeta'
			case 2:
				return 'naranja'
			case 3:
				return 'verde'
		}
	}
	
	iluminarSecuencia(){
		for(let i = 0; i < this.nivel; i++){
			let color = this.transformarNumeroAColor(this.secuencia[i])
			//Esta linea lo que hace es iluminar cada color, cada 1s * i.
			//Cada color dependera de su posicion en el array.
			//El primer color se demorara 0s, el segundo 1s....
			setTimeout(() => this.iluminarColor(color), 1000 * i)
		}
	}

	iluminarColor(color){
		this.colores[color].classList.add('light')
		setTimeout(() => this.apagarColor(color), 350)
	}
	
	apagarColor(color){
		this.colores[color].classList.remove('light')
	}
	
	//Esta funcion agrega el eventListener a los div del DOM.
	agregarEventosClick(){
		//Esta linea lo que hace es expecificar con .bind(this) quien es el this (el juego) y no
		//pasar el <div> como this principal.
		//this.colores.celeste.addEventListener('click', this.elegirColor.bind(this))
		this.colores.celeste.addEventListener('click', this.elegirColor)
		this.colores.verde.addEventListener('click', this.elegirColor)
		this.colores.violeta.addEventListener('click', this.elegirColor)
		this.colores.naranja.addEventListener('click', this.elegirColor)
	}
	
	elegirColor(ev){
		console.log(this)
		console.log(ev)
	}
}












function empezarJuego(){
	window.juego = new Juego()
}














