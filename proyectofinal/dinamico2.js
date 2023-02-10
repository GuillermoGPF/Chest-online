



// ----------------------------------------------CAMBIAR EL COLOR DEL BOTON SESIÓN--------------------------------------------

			function cambioColor1(){

				document.getElementById("boton").style.color = "#00a2e8";

			}

			function cambioColor2(){

				document.getElementById("boton").style.color = "white";

			}

			function cierrasesion(){

				window.location.replace("entrada.html");

			}
			let apretar = document.getElementById("boton");
			apretar.addEventListener("click",cierrasesion);


// -------------------------------------------------FUNCIONES PINCHA AQUÍ-------------------------------------------------



			function cambioColor3(){

				document.getElementById("pincha").style.color = "#00a2e8";
				document.getElementById("continuar").style.color = "#00a2e8";

			}

			function cambioColor4(){

				document.getElementById("pincha").style.color = "white";
				document.getElementById("continuar").style.color = "white";

			}

			function pinchar(){

				document.getElementById("cuadrotexto").style.display = "block";
				document.getElementById("cuadrotitulo").style.display = "none";


			}


			function aparecetodo(){

				document.getElementById("logo1").style.visibility = "visible";
				document.getElementById("logo2").style.visibility = "visible";
				document.getElementById("logo3").style.visibility = "visible";
				document.getElementById("logo4").style.visibility = "visible";
				document.getElementById("logo5").style.visibility = "visible";
				document.getElementById("logo6").style.visibility = "visible";
				document.getElementById("logo7").style.visibility = "visible";
				document.getElementById("logo8").style.visibility = "visible";
				document.getElementById("logo9").style.visibility = "visible";
				document.getElementById("logo10").style.visibility = "visible";
				document.getElementById("cuadrotexto").style.display = "none";
				document.getElementById("tutor").style.visibility = "visible";

			}



// -------------------------------------HACER CLICK Y SALE ME GUSTA EN APLICACIÓN 1--------------------------------------



			let love1 = true;

			function megusta1(){
				

				if(love1 == true){

					document.getElementById("heart1").style.visibility = "visible";
					document.getElementById("roto1").style.visibility = "hidden";

					love1 = false;

				}

				else if(love1 == false){

					document.getElementById("heart1").style.visibility = "hidden";
					document.getElementById("roto1").style.visibility = "visible";

					love1 = true;

				}

			}
			function quita1(){

				document.getElementById("heart1").style.visibility = "hidden";
				document.getElementById("roto1").style.visibility = "hidden";

			}



// ---------------------------------------HACER CLICK Y SALE ME GUSTA EN APLICACIÓN 2-------------------------------------



			let love2 = true;

			function megusta2(){
				

				if(love2 == true){

					document.getElementById("heart2").style.visibility = "visible";
					document.getElementById("roto2").style.visibility = "hidden";

					love2 = false;

				}

				else if(love2 == false){

					document.getElementById("heart2").style.visibility = "hidden";
					document.getElementById("roto2").style.visibility = "visible";

					love2 = true;

				}

			}
			function quita2(){

				document.getElementById("heart2").style.visibility = "hidden";
				document.getElementById("roto2").style.visibility = "hidden";

			}



// -----------------------------------------HACER CLICK Y SALE ME GUSTA EN APLICACIÓN 3-----------------------------------



			let love3 = true;

			function megusta3(){
				

				if(love3 == true){

					document.getElementById("heart3").style.visibility = "visible";
					document.getElementById("roto3").style.visibility = "hidden";

					love3 = false;

				}

				else if(love3 == false){

					document.getElementById("heart3").style.visibility = "hidden";
					document.getElementById("roto3").style.visibility = "visible";

					love3 = true;

				}

			}
			function quita3(){

				document.getElementById("heart3").style.visibility = "hidden";
				document.getElementById("roto3").style.visibility = "hidden";

			}



// ---------------------------------------HACER CLICK Y SALE ME GUSTA EN APLICACIÓN 4------------------------------------



			let love4 = true;

			function megusta4(){
				

				if(love4 == true){

					document.getElementById("heart4").style.visibility = "visible";
					document.getElementById("roto4").style.visibility = "hidden";

					love4 = false;

				}

				else if(love4 == false){

					document.getElementById("heart4").style.visibility = "hidden";
					document.getElementById("roto4").style.visibility = "visible";

					love4 = true;

				}

			}
			function quita4(){

				document.getElementById("heart4").style.visibility = "hidden";
				document.getElementById("roto4").style.visibility = "hidden";

			}



// ----------------------------------------HACER CLICK Y SALE ME GUSTA EN APLICACIÓN 5-----------------------------------



			let love5 = true;

			function megusta5(){
				

				if(love5 == true){

					document.getElementById("heart5").style.visibility = "visible";
					document.getElementById("roto5").style.visibility = "hidden";

					love5 = false;

				}

				else if(love5 == false){

					document.getElementById("heart5").style.visibility = "hidden";
					document.getElementById("roto5").style.visibility = "visible";

					love5 = true;

				}

			}
			function quita5(){

				document.getElementById("heart5").style.visibility = "hidden";
				document.getElementById("roto5").style.visibility = "hidden";

			}



// ----------------------------------------HACER CLICK Y SALE ME GUSTA EN APLICACIÓN 6-----------------------------------



			let love6 = true;

			function megusta6(){
				

				if(love6 == true){

					document.getElementById("heart6").style.visibility = "visible";
					document.getElementById("roto6").style.visibility = "hidden";

					love6 = false;

				}

				else if(love6 == false){

					document.getElementById("heart6").style.visibility = "hidden";
					document.getElementById("roto6").style.visibility = "visible";

					love6 = true;

				}

			}
			function quita6(){

				document.getElementById("heart6").style.visibility = "hidden";
				document.getElementById("roto6").style.visibility = "hidden";

			}



// ------------------------------------------HACER CLICK Y SALE ME GUSTA EN APLICACIÓN 7----------------------------------



			let love7 = true;

			function megusta7(){
				

				if(love7 == true){

					document.getElementById("heart7").style.visibility = "visible";
					document.getElementById("roto7").style.visibility = "hidden";

					love7 = false;

				}

				else if(love7 == false){

					document.getElementById("heart7").style.visibility = "hidden";
					document.getElementById("roto7").style.visibility = "visible";

					love7 = true;

				}

			}
			function quita7(){

				document.getElementById("heart7").style.visibility = "hidden";
				document.getElementById("roto7").style.visibility = "hidden";

			}



// -----------------------------------------HACER CLICK Y SALE ME GUSTA EN APLICACIÓN 8----------------------------------



			let love8 = true;

			function megusta8(){
				

				if(love8 == true){

					document.getElementById("heart8").style.visibility = "visible";
					document.getElementById("roto8").style.visibility = "hidden";

					love8 = false;

				}

				else if(love8 == false){

					document.getElementById("heart8").style.visibility = "hidden";
					document.getElementById("roto8").style.visibility = "visible";

					love8 = true;

				}

			}
			function quita8(){

				document.getElementById("heart8").style.visibility = "hidden";
				document.getElementById("roto8").style.visibility = "hidden";

			}



// --------------------------------------------HACER CLICK Y SALE ME GUSTA EN APLICACIÓN 9-------------------------------



			let love9 = true;

			function megusta9(){
				

				if(love9 == true){

					document.getElementById("heart9").style.visibility = "visible";
					document.getElementById("roto9").style.visibility = "hidden";

					love9 = false;

				}

				else if(love9 == false){

					document.getElementById("heart9").style.visibility = "hidden";
					document.getElementById("roto9").style.visibility = "visible";

					love9 = true;

				}

			}
			function quita9(){

				document.getElementById("heart9").style.visibility = "hidden";
				document.getElementById("roto9").style.visibility = "hidden";

			}



// -----------------------------------------HACER CLICK Y SALE ME GUSTA EN APLICACIÓN 10--------------------------------



			let love10= true;

			function megusta10(){
				

				if(love10 == true){

					document.getElementById("heart10").style.visibility = "visible";
					document.getElementById("roto10").style.visibility = "hidden";

					love10 = false;

				}

				else if(love10 == false){

					document.getElementById("heart10").style.visibility = "hidden";
					document.getElementById("roto10").style.visibility = "visible";

					love10 = true;

				}

			}
			function quita10(){

				document.getElementById("heart10").style.visibility = "hidden";
				document.getElementById("roto10").style.visibility = "hidden";

			}




// ---------------------------------------------CUADRO DE BÚSQUEDA CON BOTÓN---------------------------------------------

			
			
			function buscando(){

				let search = document.getElementById("buscar").value;

					if(search == "facebook"){

						document.getElementById("logo1").style.display = "block";
						document.getElementById("logo1").style.margin = "0 auto";
						document.getElementById("logo1").style.float = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "twitter"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "block";
						document.getElementById("logo2").style.margin = "0 auto";
						document.getElementById("logo2").style.float = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "instagram"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "block";
						document.getElementById("logo3").style.margin = "0 auto";
						document.getElementById("logo3").style.float = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "apple"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "block";
						document.getElementById("logo4").style.margin = "0 auto";
						document.getElementById("logo4").style.float = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "dropbox"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "block";
						document.getElementById("logo5").style.margin = "0 auto";
						document.getElementById("logo5").style.float = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "whatsapp"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "block";
						document.getElementById("logo6").style.margin = "0 auto";
						document.getElementById("logo6").style.float = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "netflix"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "block";
						document.getElementById("logo7").style.margin = "0 auto";
						document.getElementById("logo7").style.float = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "hbo"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "block";
						document.getElementById("logo8").style.margin = "0 auto";
						document.getElementById("logo8").style.float = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "spotify"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "block";
						document.getElementById("logo9").style.margin = "0 auto";
						document.getElementById("logo9").style.float = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "amazon"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "block";
						document.getElementById("logo10").style.margin = "0 auto";
						document.getElementById("logo10").style.float = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					// else if(search == "amazon spotify"){

					// 	document.getElementById("logo1").style.display = "none";
					// 	document.getElementById("logo2").style.display = "none";
					// 	document.getElementById("logo3").style.display = "none";
					// 	document.getElementById("logo4").style.display = "none";
					// 	document.getElementById("logo5").style.display = "none";
					// 	document.getElementById("logo6").style.display = "none";
					// 	document.getElementById("logo7").style.display = "none";
					// 	document.getElementById("logo8").style.display = "none";
					// 	document.getElementById("logo9").style.display = "block";
					// 	document.getElementById("logo9").style.marginTop = "0px";
					// 	document.getElementById("logo9").style.marginLeft = "1000px";
					// 	document.getElementById("logo10").style.display = "block";
					// 	document.getElementById("logo10").style.marginTop = "-400px";
					// 	document.getElementById("logo10").style.marginLeft = "500px";

					// }
					else if(search == "todo"){

						window.location.replace("index.html");
						// document.getElementById("cuadrotitulo").style.display = "none";
						// document.getElementById("cuadrotexto").style.display = "none";
						// document.getElementById("logo1").style.visibility = "visible";
						// document.getElementById("logo2").style.visibility = "visible";
						// document.getElementById("logo3").style.visibility = "visible";
						// document.getElementById("logo4").style.visibility = "visible";
						// document.getElementById("logo5").style.visibility = "visible";
						// document.getElementById("logo6").style.visibility = "visible";
						// document.getElementById("logo7").style.visibility = "visible";
						// document.getElementById("logo8").style.visibility = "visible";
						// document.getElementById("logo9").style.visibility = "visible";
						// document.getElementById("logo10").style.visibility = "visible";


						// document.getElementById("titulo2").innerHTML = "";

						// let logotipo = document.getElementsByClassName("logos");
						
						// for (colocar of logotipo){

						// colocar.style.width = "250px";
						// colocar.style.height = "250px";
						// colocar.style.position = "static";
						// colocar.style.display = "block";
						// colocar.style.float = "left";
						// colocar.style.margin = "20px";
						// colocar.style.marginLeft = "78px";
						
						// }

					}
					else{

						window.location.replace("index.html");


						// document.getElementById("titulo2").innerHTML = "";

						// logotipo = document.getElementsByClassName("logos");
						
						// for (colocar of logotipo){

						// colocar.style.width = "250px";
						// colocar.style.height = "250px";
						// colocar.style.position = "static";
						// colocar.style.display = "block";
						// colocar.style.float = "left";
						// colocar.style.margin = "20px";
						// colocar.style.marginLeft = "78px";
						
						// }
					}
						

			}
			



// ------------------------------------------------CUADRO DE BÚSQUEDA APRETANDO ENTER-----------------------------------------------------



			function enter(){

				let tecla = event.keyCode;

				if(tecla == "13"){

					let search = document.getElementById("buscar").value;

					if(search == "facebook"){

						document.getElementById("logo1").style.display = "block";
						document.getElementById("logo1").style.margin = "0 auto";
						document.getElementById("logo1").style.float = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "twitter"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "block";
						document.getElementById("logo2").style.margin = "0 auto";
						document.getElementById("logo2").style.float = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "instagram"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "block";
						document.getElementById("logo3").style.margin = "0 auto";
						document.getElementById("logo3").style.float = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "apple"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "block";
						document.getElementById("logo4").style.margin = "0 auto";
						document.getElementById("logo4").style.float = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "dropbox"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "block";
						document.getElementById("logo5").style.margin = "0 auto";
						document.getElementById("logo5").style.float = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "whatsapp"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "block";
						document.getElementById("logo6").style.margin = "0 auto";
						document.getElementById("logo6").style.float = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "netflix"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "block";
						document.getElementById("logo7").style.margin = "0 auto";
						document.getElementById("logo7").style.float = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "hbo"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "block";
						document.getElementById("logo8").style.margin = "0 auto";
						document.getElementById("logo8").style.float = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;
					}
					else if(search == "spotify"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "block";
						document.getElementById("logo9").style.margin = "0 auto";
						document.getElementById("logo9").style.float = "none";
						document.getElementById("logo10").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "amazon"){

						document.getElementById("logo1").style.display = "none";
						document.getElementById("logo2").style.display = "none";
						document.getElementById("logo3").style.display = "none";
						document.getElementById("logo4").style.display = "none";
						document.getElementById("logo5").style.display = "none";
						document.getElementById("logo6").style.display = "none";
						document.getElementById("logo7").style.display = "none";
						document.getElementById("logo8").style.display = "none";
						document.getElementById("logo9").style.display = "none";
						document.getElementById("logo10").style.display = "block";
						document.getElementById("logo10").style.margin = "0 auto";
						document.getElementById("logo10").style.float = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo2").innerHTML = "1 resultado de la búsqueda de: "+search;

					}
					else if(search == "todo"){

						window.location.reload("index.html");

						

						// document.getElementById("titulo2").innerHTML = "";

						// let logotipo = document.getElementsByClassName("logos");
						
						// for (colocar of logotipo){

						// colocar.style.width = "250px";
						// colocar.style.height = "250px";
						// colocar.style.position = "static";
						// colocar.style.display = "block";
						// colocar.style.float = "left";
						// colocar.style.margin = "20px";
						// colocar.style.marginLeft = "78px";
						
						// }

					}
					else{

						window.location.replace("index.html");
						

						// document.getElementById("titulo2").innerHTML = "";

						// let logotipo = document.getElementsByClassName("logos");
						
						// for (colocar of logotipo){

						// colocar.style.width = "250px";
						// colocar.style.height = "250px";
						// colocar.style.position = "static";
						// colocar.style.display = "block";
						// colocar.style.float = "left";
						// colocar.style.margin = "20px";
						// colocar.style.marginLeft = "78px";
						
						// }
					}

				}

			}




// ------------------------------------------------CAJAS CON NOMBRES---------------------------------------------------------


// ---------------------------------------------------CAJA NOMBRE 1-----------------------------------------------

	function aparece1(){

		document.getElementById("caja1").style.visibility = "visible";

	}
	let pasar1 = document.getElementById("logo1");
	pasar1.addEventListener("mousemove",aparece1);

	function sale1(){

		document.getElementById("caja1").style.visibility = "hidden";

	}
	let salir1 = document.getElementById("logo1");
	salir1.addEventListener("mouseout",sale1);


// ---------------------------------------------------CAJA NOMBRE 2-----------------------------------------------


	function aparece2(){

		document.getElementById("caja2").style.visibility = "visible";

	}
	let pasar2 = document.getElementById("logo2");
	pasar2.addEventListener("mousemove",aparece2);

	function sale2(){

		document.getElementById("caja2").style.visibility = "hidden";

	}
	let salir2 = document.getElementById("logo2");
	salir2.addEventListener("mouseout",sale2);


// ---------------------------------------------------CAJA NOMBRE 3-----------------------------------------------


	function aparece3(){

		document.getElementById("caja3").style.visibility = "visible";

	}
	let pasar3 = document.getElementById("logo3");
	pasar3.addEventListener("mousemove",aparece3);

	function sale3(){

		document.getElementById("caja3").style.visibility = "hidden";

	}
	let salir3 = document.getElementById("logo3");
	salir3.addEventListener("mouseout",sale3);


// ---------------------------------------------------CAJA NOMBRE 4-----------------------------------------------


	function aparece4(){

		document.getElementById("caja4").style.visibility = "visible";

	}
	let pasar4 = document.getElementById("logo4");
	pasar4.addEventListener("mousemove",aparece4);

	function sale4(){

		document.getElementById("caja4").style.visibility = "hidden";

	}
	let salir4 = document.getElementById("logo4");
	salir4.addEventListener("mouseout",sale4);


// ---------------------------------------------------CAJA NOMBRE 5-----------------------------------------------


	function aparece5(){

		document.getElementById("caja5").style.visibility = "visible";

	}
	let pasar5 = document.getElementById("logo5");
	pasar5.addEventListener("mousemove",aparece5);

	function sale5(){

		document.getElementById("caja5").style.visibility = "hidden";

	}
	let salir5 = document.getElementById("logo5");
	salir5.addEventListener("mouseout",sale5);

// ---------------------------------------------------CAJA NOMBRE 6-----------------------------------------------


	function aparece6(){

		document.getElementById("caja6").style.visibility = "visible";

	}
	let pasar6 = document.getElementById("logo6");
	pasar6.addEventListener("mousemove",aparece6);

	function sale6(){

		document.getElementById("caja6").style.visibility = "hidden";

	}
	let salir6 = document.getElementById("logo6");
	salir6.addEventListener("mouseout",sale6);

// ---------------------------------------------------CAJA NOMBRE 7-----------------------------------------------


	function aparece7(){

		document.getElementById("caja7").style.visibility = "visible";

	}
	let pasar7 = document.getElementById("logo7");
	pasar7.addEventListener("mousemove",aparece7);

	function sale7(){

		document.getElementById("caja7").style.visibility = "hidden";

	}
	let salir7 = document.getElementById("logo7");
	salir7.addEventListener("mouseout",sale7);


// ---------------------------------------------------CAJA NOMBRE 8-----------------------------------------------


	function aparece8(){

		document.getElementById("caja8").style.visibility = "visible";

	}
	let pasar8 = document.getElementById("logo8");
	pasar8.addEventListener("mousemove",aparece8);

	function sale8(){

		document.getElementById("caja8").style.visibility = "hidden";

	}
	let salir8 = document.getElementById("logo8");
	salir8.addEventListener("mouseout",sale8);


// ---------------------------------------------------CAJA NOMBRE 9-----------------------------------------------


	function aparece9(){

		document.getElementById("caja9").style.visibility = "visible";

	}
	let pasar9 = document.getElementById("logo9");
	pasar9.addEventListener("mousemove",aparece9);

	function sale9(){

		document.getElementById("caja9").style.visibility = "hidden";

	}
	let salir9 = document.getElementById("logo9");
	salir9.addEventListener("mouseout",sale9);


// ---------------------------------------------------CAJA NOMBRE 10-----------------------------------------------


	function aparece10(){

		document.getElementById("caja10").style.visibility = "visible";

	}
	let pasar10 = document.getElementById("logo10");
	pasar10.addEventListener("mousemove",aparece10);

	function sale10(){

		document.getElementById("caja10").style.visibility = "hidden";

	}
	let salir10 = document.getElementById("logo10");
	salir10.addEventListener("mouseout",sale10);




// --------------------------------------------LOGIN DE CADA APLICACIÓN----------------------------------------------



// ----------------------------------------------------LOGIN 1--------------------------------------------------


		function registro1(){

			document.getElementById("login1").style.display = "block";

		}
		
		function cancelar1(){

			document.getElementById("login1").style.display = "none";

		}


// ----------------------------------------------------LOGIN 1--------------------------------------------------


		function registro2(){

			document.getElementById("login2").style.display = "block";

		}
		
		function cancelar2(){

			document.getElementById("login2").style.display = "none";

		}

// ----------------------------------------------------LOGIN 3--------------------------------------------------


		function registro3(){

			document.getElementById("login3").style.display = "block";

		}
		
		function cancelar3(){

			document.getElementById("login3").style.display = "none";

		}

// ----------------------------------------------------LOGIN 4--------------------------------------------------


		function registro4(){

			document.getElementById("login4").style.display = "block";

		}
	
		function cancelar4(){

			document.getElementById("login4").style.display = "none";

		}

// ----------------------------------------------------LOGIN 5--------------------------------------------------


		function registro5(){

			document.getElementById("login5").style.display = "block";

		}
		
		function cancelar5(){

			document.getElementById("login5").style.display = "none";

		}


// ----------------------------------------------------LOGIN 6--------------------------------------------------


		function registro6(){

			document.getElementById("login6").style.display = "block";

		}
		
		function cancelar6(){

			document.getElementById("login6").style.display = "none";

		}


// ----------------------------------------------------LOGIN 7--------------------------------------------------


		function registro7(){

			document.getElementById("login7").style.display = "block";

		}
		
		function cancelar7(){

			document.getElementById("login7").style.display = "none";

		}



// ----------------------------------------------------LOGIN 8--------------------------------------------------


		function registro8(){

			document.getElementById("login8").style.display = "block";

		}
		
		function cancelar8(){

			document.getElementById("login8").style.display = "none";

		}


// ----------------------------------------------------LOGIN 9--------------------------------------------------


		function registro9(){

			document.getElementById("login9").style.display = "block";

		}
		
		function cancelar9(){

			document.getElementById("login9").style.display = "none";

		}


// ----------------------------------------------------LOGIN 10--------------------------------------------------


		function registro10(){

			document.getElementById("login10").style.display = "block";

		}

		function cancelar10(){

			document.getElementById("login10").style.display = "none";

		}


// -------------------------------------------CAMBIAR COLOR MENÚ--------------------------------------------


	function colorear1(){

      document.getElementById("menu1").style.color = "#00a2e8";
      document.getElementById("cajita1").style.backgroundColor = "#a7a6a6";
      document.getElementById("icono1").style.display = "none";
      document.getElementById("icono1-1").style.display = "block";

    }

    function colorear2(){

      document.getElementById("menu1").style.color = "white";
      document.getElementById("cajita1").style.backgroundColor = "#c3c3c3";
      document.getElementById("icono1").style.display = "block";
      document.getElementById("icono1-1").style.display = "none";

    }


    function colorear3(){

      document.getElementById("menu2").style.color = "#00a2e8";
      document.getElementById("cajita2").style.backgroundColor = "#a7a6a6";
      document.getElementById("icono2").style.display = "none";
      document.getElementById("icono2-1").style.display = "block";

    }

    function colorear4(){

      document.getElementById("menu2").style.color = "white";
      document.getElementById("cajita2").style.backgroundColor = "#c3c3c3";
      document.getElementById("icono2").style.display = "block";
      document.getElementById("icono2-1").style.display = "none";

    }


    function colorear5(){

      document.getElementById("menu3").style.color = "#00a2e8";
      document.getElementById("cajita3").style.backgroundColor = "#a7a6a6";
      document.getElementById("icono3").style.display = "none";
      document.getElementById("icono3-1").style.display = "block";

    }

    function colorear6(){

      document.getElementById("menu3").style.color = "white";
      document.getElementById("cajita3").style.backgroundColor = "#c3c3c3";
      document.getElementById("icono3").style.display = "block";
      document.getElementById("icono3-1").style.display = "none";

    }


    function colorear7(){

      document.getElementById("menu4").style.color = "#00a2e8";
      document.getElementById("cajita4").style.backgroundColor = "#a7a6a6";
      document.getElementById("icono4").style.display = "none";
      document.getElementById("icono4-1").style.display = "block";

    }

    function colorear8(){

      document.getElementById("menu4").style.color = "white";
      document.getElementById("cajita4").style.backgroundColor = "#c3c3c3";
      document.getElementById("icono4").style.display = "block";
      document.getElementById("icono4-1").style.display = "none";

    }



// -------------------------------------------CAMBIAR COLOR MENÚ--------------------------------------------


		function colorearMenuRes1(){

			document.getElementById("menu1-1").style.color = "#00a2e8";
			document.getElementById("cajita1-1").style.backgroundColor = "#a7a6a6";

		}

		function colorearMenuRes2(){

			document.getElementById("menu1-1").style.color = "white";
			document.getElementById("cajita1-1").style.backgroundColor = "#c3c3c3";

		}


		function colorearMenuRes3(){

			document.getElementById("menu2-1").style.color = "#00a2e8";
			document.getElementById("cajita2-1").style.backgroundColor = "#a7a6a6";

		}

		function colorearMenuRes4(){

			document.getElementById("menu2-1").style.color = "white";
			document.getElementById("cajita2-1").style.backgroundColor = "#c3c3c3";

		}


		function colorearMenuRes5(){

			document.getElementById("menu3-1").style.color = "#00a2e8";
			document.getElementById("cajita3-1").style.backgroundColor = "#a7a6a6";

		}

		function colorearMenuRes6(){

			document.getElementById("menu3-1").style.color = "white";
			document.getElementById("cajita3-1").style.backgroundColor = "#c3c3c3";

		}


		function colorearMenuRes7(){

			document.getElementById("menu4-1").style.color = "#00a2e8";
			document.getElementById("cajita4-1").style.backgroundColor = "#a7a6a6";

		}

		function colorearMenuRes8(){

			document.getElementById("menu4-1").style.color = "white";
			document.getElementById("cajita4-1").style.backgroundColor = "#c3c3c3";

		}





// --------------------------------------------------BOTÓN TUTORIAL-------------------------------------------------------------


		function entraTutorial(){

        document.getElementById("tutorial").style.display = "block";

      }

      function saleTutorial(){

        document.getElementById("tutorial").style.display = "none";

      }



// --------------------------------------------------BOTÓN MENÚ--------------------------------------------------------


		let abrir = true;

		function saleMenu(){

			if(abrir == true){

              document.getElementById("menu").style.display = "block";

              abrir = false;

            }
            else{

              document.getElementById("menu").style.display = "none";

              abrir = true;

            }

		}
		function quitaMenu(){

      		document.getElementById("menu").style.display = "none";

      		abrir = true;

    	}