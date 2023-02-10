



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



// -------------------------------------------SEGUNDA PÁGINA: EL HOTEL-----------------------------------------------



// ---------------------------------------------ACCESIBILIDAD--------------------------------------------------



		function white(){

			document.getElementById("columna2").style.backgroundColor="white";

		}

		function yellow(){

			document.getElementById("columna2").style.backgroundColor="yellow";

		}


		function pink(){

			document.getElementById("columna2").style.backgroundColor="pink";

		}
	

	let letra = 10;

	function aumentar(){

		let parrafos = document.getElementsByClassName("texto1");

		letra++;

		for (texto of parrafos){

			texto.style.fontSize = letra+'pt';

		}

	}
	let grande = document.getElementById("big");
	grande.addEventListener("click", aumentar);


	function disminuir(){

		let parrafos = document.getElementsByClassName("texto1");

		letra--

		for (texto of parrafos){

			texto.style.fontSize = letra+'pt';

		}

	}
	let peque = document.getElementById("small");
	peque.addEventListener("click", disminuir);


	function mantener(){

		let parrafos = document.getElementsByClassName("texto1");

		for (texto of parrafos){

			letra=10;

			texto.style.fontSize = letra+'pt';

		}

	}
	let mantiene = document.getElementById("normal");
	mantiene.addEventListener("click", mantener);