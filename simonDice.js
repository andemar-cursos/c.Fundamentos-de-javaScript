

const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde   = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10

class Juego{
	constructor(){
		this.inicializar()
		this.generarSecuencia()
		//Se aplica un setTimeout para no comenzar al instate que se oprime el boton jugar
		setTimeout(this.siguienteNivel, 500)
	}
	
	inicializar(){
		//Con esta linea se expecifica que el this, siempre sera el juego mismo.
		this.siguienteNivel = this.siguienteNivel.bind(this)
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
		this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
	}
	
	siguienteNivel(){
		this.subnivel = 0
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
	
	transformarColorANumero(color){
		switch (color){
			case 'celeste':
				return 0
			case 'violeta':
				return 1
			case 'naranja':
				return 2
			case 'verde':
				return 3
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
	
	eliminarEventosClick(){
		this.colores.celeste.removeEventListener('click', this.elegirColor)
		this.colores.verde.removeEventListener('click', this.elegirColor)
		this.colores.violeta.removeEventListener('click', this.elegirColor)
		this.colores.naranja.removeEventListener('click', this.elegirColor)
	}
	
	elegirColor(ev){
		const nombreColor = ev.target.dataset.color
		const numeroColor = this.transformarColorANumero(nombreColor)
		this.iluminarColor(nombreColor)
		//Esta linea lo que hace es comparar el color tocado por el usuario
		//por el color guardado en la secuencia en la posicion correspondiente
		if(numeroColor === this.secuencia[this.subnivel]){
			this.subnivel++
			if(this.subnivel === this.nivel){
				this.nivel++
				this.eliminarEventosClick()
				if(this.nivel === (ULTIMO_NIVEL + 1)){
					//Gano!!
				}else{
					//Como el setTimeout lo maneja window a la hora de llamar
					//a la funcion "siguienteNivel" no existe, por tal razon
					//expecifica en el bind, que el this, es el juego.
					//No se coloca en la funcion los () ya que no es un llamado,
					//si no una referencia a la funcion que tendra que llamar despues de
					//1.5k milisegundos.
					////setTimeout(this.siguienteNivel.bind(this),1500)
					
					//Si en el inicializar() se especifica que el this de siguiente nivel
					//es el juego, no se necesita hacer .bind(this) en los llamados posteriores.
					setTimeout(this.siguienteNivel, 1500)
				}
			}
		}else{
			//perdio
		}
	}
}












function empezarJuego(){
	window.juego = new Juego()
}














