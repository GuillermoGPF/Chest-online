



	// -----------------------------------------------PÁGINA PRINCIPAL-------------------------------------------------



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


// -------------------------------------------------SLIDER---------------------------------------------------


		$(function(){
	$('.pix_diapo').diapo();
});



// -----------------------------------------------CUADROS DE IMÁGEN-------------------------------------------

		function aparece1(){

			document.getElementById("cuadro1").style.display = "none";
			document.getElementById("cuadro1b").style.display = "block";

		}

		let muestra1 = document.getElementById("cuadro1");
		muestra1.addEventListener("mouseover" , aparece1);

		function sale1(){

			document.getElementById("cuadro1").style.display = "block";
			document.getElementById("cuadro1b").style.display = "none";

		}

		let salir1 = document.getElementById("cuadro1b");
		salir1.addEventListener("mouseout" , sale1);


		function aparece2(){

			document.getElementById("cuadro2").style.display = "none";
			document.getElementById("cuadro2b").style.display = "block";

		}

		let muestra2 = document.getElementById("cuadro2");
		muestra2.addEventListener("mouseover" , aparece2);

		function sale2(){

			document.getElementById("cuadro2").style.display = "block";
			document.getElementById("cuadro2b").style.display = "none";

		}

		let salir2 = document.getElementById("cuadro2b");
		salir2.addEventListener("mouseout" , sale2);

		function aparece3(){

			document.getElementById("cuadro3").style.display = "none";
			document.getElementById("cuadro3b").style.display = "block";

		}

		let muestra3 = document.getElementById("cuadro3");
		muestra3.addEventListener("mouseover" , aparece3);

		function sale3(){

			document.getElementById("cuadro3").style.display = "block";
			document.getElementById("cuadro3b").style.display = "none";

		}

		let salir3 = document.getElementById("cuadro3b");
		salir3.addEventListener("mouseout" , sale3);

		function aparece4(){

			document.getElementById("cuadro4").style.display = "none";
			document.getElementById("cuadro4b").style.display = "block";

		}

		let muestra4 = document.getElementById("cuadro4");
		muestra4.addEventListener("mouseover" , aparece4);

		function sale4(){

			document.getElementById("cuadro4").style.display = "block";
			document.getElementById("cuadro4b").style.display = "none";

		}

		let salir4 = document.getElementById("cuadro4b");
		salir4.addEventListener("mouseout" , sale4);




// -----------------------------------------------COOKIES----------------------------------------------------



		function quitar(){

			document.getElementById("cookies").style.visibility="hidden";

		}


		let aceptar = document.getElementById("seguir");

		aceptar.addEventListener("click" , quitar);