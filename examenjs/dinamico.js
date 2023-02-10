



// -----------------------------------------------ICONOS SOCIALES---------------------------------------------

		function color1(){

			document.getElementById("social1").style.filter = "grayscale(0%)";

		}

		let colorear1 = document.getElementById("social1");
		colorear1.addEventListener("mouseover" , color1);

		function gris1(){

			document.getElementById("social1").style.filter = "grayscale(100%)";

		}

		let grises1 = document.getElementById("social1");
		grises1.addEventListener("mouseout" , gris1);

		function color2(){

			document.getElementById("social2").style.filter = "grayscale(0%)";

		}

		let colorear2 = document.getElementById("social2");
		colorear2.addEventListener("mouseover" , color2);

		function gris2(){

			document.getElementById("social2").style.filter = "grayscale(100%)";

		}

		let grises2 = document.getElementById("social2");
		grises2.addEventListener("mouseout" , gris2);

		function color3(){

			document.getElementById("social3").style.filter = "grayscale(0%)";

		}

		let colorear3 = document.getElementById("social3");
		colorear3.addEventListener("mouseover" , color3);

		function gris3(){

			document.getElementById("social3").style.filter = "grayscale(100%)";

		}

		let grises3 = document.getElementById("social3");
		grises3.addEventListener("mouseout" , gris3);

		function color4(){

			document.getElementById("social4").style.filter = "grayscale(0%)";

		}

		let colorear4 = document.getElementById("social4");
		colorear4.addEventListener("mouseover" , color4);

		function gris4(){

			document.getElementById("social4").style.filter = "grayscale(100%)";

		}

		let grises4 = document.getElementById("social4");
		grises4.addEventListener("mouseout" , gris4);

		function color5(){

			document.getElementById("social5").style.filter = "grayscale(0%)";

		}

		let colorear5 = document.getElementById("social5");
		colorear5.addEventListener("mouseover" , color5);

		function gris5(){

			document.getElementById("social5").style.filter = "grayscale(100%)";

		}

		let grises5= document.getElementById("social5");
		grises5.addEventListener("mouseout" , gris5);

		function color6(){

			document.getElementById("social6").style.filter = "grayscale(0%)";

		}

		let colorear6 = document.getElementById("social6");
		colorear6.addEventListener("mouseover" , color6);

		function gris6(){

			document.getElementById("social6").style.filter = "grayscale(100%)";

		}

		let grises6= document.getElementById("social6");
		grises6.addEventListener("mouseout" , gris6);

		function color7(){

			document.getElementById("social7").style.filter = "grayscale(0%)";

		}

		let colorear7 = document.getElementById("social7");
		colorear7.addEventListener("mouseover" , color7);

		function gris7(){

			document.getElementById("social7").style.filter = "grayscale(100%)";

		}

		let grises7 = document.getElementById("social7");
		grises7.addEventListener("mouseout" , gris7);

		function color8(){

			document.getElementById("social8").style.filter = "grayscale(0%)";

		}

		let colorear8 = document.getElementById("social8");
		colorear8.addEventListener("mouseover" , color8);

		function gris8(){

			document.getElementById("social8").style.filter = "grayscale(100%)";

		}

		let grises8 = document.getElementById("social8");
		grises8.addEventListener("mouseout" , gris8);


// -----------------------------------------------ICONO LLAVE-------------------------------------------------


		function llave(){

			let pass = prompt("Bienvenido. Dígame su contraseña");

			if(pass == "felicidad"){

				alert("Su contraseña es correcta."
					+" Aún no hemos introducido esa funcionalidad, estará disponible en breve. "
					+" Disculpe las molestias. ");

			}

			else{

				for(i=0 ; i<=2 ; i++){

					pass = prompt("Su contraseña es errónea. Vuelva a introducirla");

					if(pass == "felicidad"){

						alert("Su contraseña es correcta."
						+" Aún no hemos introducido esa funcionalidad, estará disponible en breve. "
						+" Disculpe las molestias. ");break;

					}

				}

			}

		}

		let entrar = document.getElementById("llave");
		entrar.addEventListener("click",llave);



// --------------------------------------------TERCERA PÁGINA: SERVICIOS-----------------------------------------------


		
		function servicios1(){

			document.getElementById("centrado").innerHTML = 'Nuestra piscina';
			document.getElementById("quitatexto").style.visibility="visible";
			document.getElementById("sintexto").style.visibility="visible";

		}



		function servicios2(){

			document.getElementById("centrado").innerHTML = 'Nuestras habitaciones';
			document.getElementById("quitatexto").style.visibility="hidden";
			document.getElementById("sintexto").style.visibility="visible";

		}


		function servicios3(){

			document.getElementById("centrado").innerHTML = 'Nuestras zonas infantiles';
			document.getElementById("quitatexto").style.visibility="hidden";
			document.getElementById("sintexto").style.visibility="visible";

		}



		function servicios4(){

			document.getElementById("centrado").innerHTML = 'Nuestro gran Spa';
			document.getElementById("quitatexto").style.visibility="visible";
			document.getElementById("sintexto").style.visibility="visible";

		}



		function servicios5(){

			document.getElementById("centrado").innerHTML = 'Wifi gratis';
			document.getElementById("quitatexto").style.visibility="hidden";
			document.getElementById("sintexto").style.visibility="hidden";

		}


// ----------------------------------------CUARTA PÁGINA: CALCULAR OFERTAS----------------------------------------------


let dias;
	let precio;
	
function estancia(d){
	dias=d;
	alert("Ha escogido "+dias+" días.");
}

function habitacion(p){

	if(dias==undefined){
		alert("Debe escoger primero los días.");
	}
	else{
		precio=p;	
		calcular();
		// alert("Ha escogido hasta "+precio+" euros.");
	}
}

function calcular(){
	let preciofinal = precio*dias;

	let personas = prompt("Diga el número de personas");

		if (personas<=2){preciofinal = preciofinal*personas}
		else if (personas<=5){preciofinal = (preciofinal*personas)*0.8}
		else{preciofinal = (preciofinal*personas)*0.5}

	let colectivos = confirm("¿Es usted de un colectivo especial?");
	
		if(colectivos==true){preciofinal = preciofinal-(preciofinal*0.1)}

	
	let fidelidad = confirm("¿Dispone usted de la Tarjeta Fidelidad Miramon?"); 
	
		if(fidelidad==true){
			let puntos = prompt("¿Cuantos puntos tiene en su tarjeta?");
				if (puntos>500){preciofinal = preciofinal-50}
		}

	for (i=1;i<=5;i++){

	let formapago = prompt("Visa, efectivo o Paypal").toLowerCase();

		if (formapago == "visa"){break;}
		else if (formapago == "efectivo"){preciofinal = preciofinal-(preciofinal*0.03);break;}
		else if (formapago == "paypal"){preciofinal = preciofinal+(preciofinal*0.02);break;}
		else{
			alert("No hemos entendido la forma de pago. Intente otra vez");			
		}
	}
	if(i>5){return false;}

	let nombre = prompt("Como se llama usted");

	alert(`Don ${nombre}, el viaje con la configuración de ${dias} dias en una habitación de un coste de ${precio} euros, es de ${preciofinal}€, para ${personas} personas, teniendo en cuenta los diferentes descuentos que se le han podido aplicar. Si quiere reservar, contacte con nosotros con el codigo de reserva FD45io65`);

}

alert(preciofinal);
				

// -------------------------------------------QUINTA PÁGINA: CONTACTAR-------------------------------------------------



// -------------------------------------------CAMPO ACTIVO FORMULARIO--------------------------------------------

		function activo1(){

			document.getElementById("nombre").style.backgroundColor="orange";

		}

		function desactivo1(){

			document.getElementById("nombre").style.backgroundColor="#c3e1f4";

		}

		function activo2(){

			document.getElementById("apellido").style.backgroundColor="orange";

		}

		function desactivo2(){

			document.getElementById("apellido").style.backgroundColor="#c3e1f4";

		}

		function activo3(){

			document.getElementById("provincia").style.backgroundColor="orange";

		}

		function desactivo3(){

			document.getElementById("provincia").style.backgroundColor="#c3e1f4";

		}

		function activo4(){

			document.getElementById("correo").style.backgroundColor="orange";

		}

		function desactivo4(){

			document.getElementById("correo").style.backgroundColor="#c3e1f4";

		}

		function activo5(){

			document.getElementById("telefono").style.backgroundColor="orange";

		}

		function desactivo5(){

			document.getElementById("telefono").style.backgroundColor="#c3e1f4";

		}

		function activo6(){

			document.getElementById("comentario").style.backgroundColor="orange";

		}

		function desactivo6(){

			document.getElementById("comentario").style.backgroundColor="#c3e1f4";

		}



// -------------------------------------------BOTÓN COMPROBAR--------------------------------------------


		function comprobar(){

			let confirNombre = document.getElementById("nombre").value;
			let confirEmail = document.getElementById("correo").value;

			if(confirNombre == "" && confirEmail == ""){

				alert("Por favor, rellene los campos obligatorios antes de continuar.");

			}
			else if(confirNombre == "" || confirEmail == ""){

				alert("Por favor, rellene los campos obligatorios antes de continuar.");

			}

		}


// -------------------------------------------BANNER TELÉFONO--------------------------------------------


		function iconoTel(){

			let codigo = prompt("Por favor, dígame su código postal");

			if(codigo.startsWith(28) == true){

				alert("Llame al teléfono 91 870 44 78");

			}
			else if(codigo.startsWith('08') == true){

				alert("Llame al teléfono 93 840 55 80");

			}
			else{

				alert("Llame al teléfono 902 50 40 60");

			}

		}


// -------------------------------------------BANNER EMAIL--------------------------------------------


		function iconoEmail(){

			let formu = confirm("Si lo desea, puede enviarnos un formulario en lugar de un correo. ¿Quiere continuar?");

			if(formu == true){

				window.location.href="mailto:hoteles@miramon.com";

			}
		}