// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#izquierda').swipeleft(function(){
			navigator.notificacion.alert("Deslizo a la izquierda",function(){"practica4","Aceptar"});
});//Barra izquierda

$('#derecha').swiperight(function(){
	navigator.notificacion.confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(1);
			break;
			
			case 2:
			navigator.notification.vibrate(1000);
			break;
		} //Switch opt
	},"Examen2","Beep,Vibrar,Cancelar");//confirm
})//barra derecha

	},false);//ready device
});//document
