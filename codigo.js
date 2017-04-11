var colores = document.querySelectorAll(".cFondo");
var probando = 0;
var elegido,xi,yi,xf,yf,estilo,color, ancho;
var punto = 0;
var d = document.querySelector("#dibujo");
var lienzo = d.getContext("2d");
var numero = document.querySelector("#tamano");

d.addEventListener("click",Puntos);

numero.addEventListener("click",function(){

	var contador = document.querySelector("#contador");
	contador.value = numero.value;
	ancho = numero.value;

})



for(var i = 0; i < colores.length; i++){

	colores[i].addEventListener("mouseenter",resaltar);
	colores[i].addEventListener("mouseleave",resaltar);
	colores[i].addEventListener("click",elegirColor);
}

function resaltar(){
	if(probando == 0){
	this.classList.remove("cFondo");
	this.classList.add("cActivo");
	probando = 1;
	}
	else{
	this.classList.remove("cActivo");
	this.classList.add("cFondo");
	probando = 0;
	}
}

function Puntos(evento){
	if(punto == 0){
	 xi = evento.x - 177;
	 yi = evento.y;
	 punto++;
	 puntoInicio(xi,yi);
	}
	else{
	 xf = evento.x - 177;
	 yf = evento.y;
	 colorear(xi,yi,xf,yf, color);
	 punto = 0;
	}

}

function elegirColor(evento){

	elegido = this.querySelector("[id^=c]");
	estilo = window.getComputedStyle(elegido);
	color = estilo.getPropertyValue("background-color");
}

function colorear(inicio1, inicio2, fin1, fin2, colores){

	lienzo.beginPath();
	lienzo.strokeStyle=colores;
	lienzo.lineWidth = ancho;
	lienzo.moveTo(inicio1,inicio2);
	lienzo.lineTo(fin1,fin2);
	lienzo.stroke();
	lienzo.closePath();
}

function puntoInicio(x,y){

	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(x,y);
	lienzo.lineTo(x + 2, y + 2);
	lienzo.stroke();
	lienzo.closePath();

}
