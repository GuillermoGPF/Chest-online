



// ------------------------------------------------CERRAR SESIÓN-------------------------------------------------------
		
		function cambioColor1(){

			document.getElementById("boton").style.color = "#004080";

		}

		function cambioColor2(){

			document.getElementById("boton").style.color = "white";

		}

      	function cierrasesion(){

        	window.location.replace("entrada.html");

      	}
      	let apretar = document.getElementById("boton");
      	apretar.addEventListener("click",cierrasesion);


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




// ----------------------------------------------CAMBIAR COLOR MENÚ---------------------------------------------------


    function colorear1(){

      document.getElementById("menu1").style.color = "#004080";
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

      document.getElementById("menu2").style.color = "#004080";
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

      document.getElementById("menu3").style.color = "#004080";
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

      document.getElementById("menu4").style.color = "#004080";
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

      document.getElementById("menu1-1").style.color = "#004080";
      document.getElementById("cajita1-1").style.backgroundColor = "#a7a6a6";

    }

    function colorearMenuRes2(){

      document.getElementById("menu1-1").style.color = "white";
      document.getElementById("cajita1-1").style.backgroundColor = "#c3c3c3";

    }


    function colorearMenuRes3(){

      document.getElementById("menu2-1").style.color = "#004080";
      document.getElementById("cajita2-1").style.backgroundColor = "#a7a6a6";

    }

    function colorearMenuRes4(){

      document.getElementById("menu2-1").style.color = "white";
      document.getElementById("cajita2-1").style.backgroundColor = "#c3c3c3";

    }


    function colorearMenuRes5(){

      document.getElementById("menu3-1").style.color = "#004080";
      document.getElementById("cajita3-1").style.backgroundColor = "#a7a6a6";

    }

    function colorearMenuRes6(){

      document.getElementById("menu3-1").style.color = "white";
      document.getElementById("cajita3-1").style.backgroundColor = "#c3c3c3";

    }


    function colorearMenuRes7(){

      document.getElementById("menu4-1").style.color = "#004080";
      document.getElementById("cajita4-1").style.backgroundColor = "#a7a6a6";

    }

    function colorearMenuRes8(){

      document.getElementById("menu4-1").style.color = "white";
      document.getElementById("cajita4-1").style.backgroundColor = "#c3c3c3";

    }






// -------------------------------------------------FUNCIONES ENTRAR-------------------------------------------------



			function cambioColor3(){

				document.getElementById("pincha").style.color = "#004080";

			}

			function cambioColor4(){

				document.getElementById("pincha").style.color = "white";

			}

			function pinchar(){

				document.getElementById("cuadrotitulo").style.display = "none";
				document.getElementById("cuadro1").style.visibility = "visible";
				document.getElementById("cuadro2").style.visibility = "visible";
				document.getElementById("cuadro3").style.visibility = "visible";
				document.getElementById("cuadro4").style.visibility = "visible";
				document.getElementById("tutor").style.visibility = "visible";


			}



// -----------------------------------------APARECE NOMBRE DE TIENDA--------------------------------------------


			function saleTienda1(){

				document.getElementById("tienda1").style.display = "block";

			}
			function quitaTienda1(){

				document.getElementById("tienda1").style.display = "none";

			}
			function saleTienda2(){

				document.getElementById("tienda2").style.display = "block";

			}
			function quitaTienda2(){

				document.getElementById("tienda2").style.display = "none";

			}
			function saleTienda3(){

				document.getElementById("tienda3").style.display = "block";

			}
			function quitaTienda3(){

				document.getElementById("tienda3").style.display = "none";

			}
			function saleTienda4(){

				document.getElementById("tienda4").style.display = "block";

			}
			function quitaTienda4(){

				document.getElementById("tienda4").style.display = "none";

			}




// ---------------------------------------------CUADRO DE BÚSQUEDA CON BOTÓN---------------------------------------------

			
			
			function buscando(){

				let search = document.getElementById("buscar").value;

					if(search == "pccomponentes"){

						document.getElementById("cuadro1").style.display = "block";
						document.getElementById("cuadro2").style.display = "none";
						document.getElementById("cuadro3").style.display = "none";
						document.getElementById("cuadro4").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo1").innerHTML = "1 resultado de la búsqueda para: "+search;

					}
					else if(search == "amazon"){

						document.getElementById("cuadro1").style.display = "none";
						document.getElementById("cuadro2").style.display = "block";
						document.getElementById("cuadro3").style.display = "none";
						document.getElementById("cuadro4").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo1").innerHTML = "1 resultado de la búsqueda para: "+search;

					}
					else if(search == "el corte ingles" || search == "el corte inglés"){

						document.getElementById("cuadro1").style.display = "none";
						document.getElementById("cuadro2").style.display = "none";
						document.getElementById("cuadro3").style.display = "block";
						document.getElementById("cuadro4").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo1").innerHTML = "1 resultado de la búsqueda para: "+search;

					}
					else if(search == "media markt"){

						document.getElementById("cuadro1").style.display = "none";
						document.getElementById("cuadro2").style.display = "none";
						document.getElementById("cuadro3").style.display = "none";
						document.getElementById("cuadro4").style.display = "block";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo1").innerHTML = "1 resultado de la búsqueda para: "+search;

					}
					
					else if(search == "todo"){

						document.getElementById("cuadro1").style.display = "block";
						document.getElementById("cuadro2").style.display = "block";
						document.getElementById("cuadro3").style.display = "block";
						document.getElementById("cuadro4").style.display = "block";
						document.getElementById("tutor").style.display = "block";
						document.getElementById("titulo1").innerHTML = "";	

					}
					else{

						document.getElementById("cuadro1").style.display = "block";
						document.getElementById("cuadro2").style.display = "block";
						document.getElementById("cuadro3").style.display = "block";
						document.getElementById("cuadro4").style.display = "block";
						document.getElementById("tutor").style.display = "block";
						document.getElementById("titulo1").innerHTML = "";	
					
					}
						

			}
			



// ------------------------------------------------CUADRO DE BÚSQUEDA APRETANDO ENTER-----------------------------------------------------



			function enter(){

				let tecla = event.keyCode;

				if(tecla == "13"){

					let search = document.getElementById("buscar").value;

					if(search == "pccomponentes"){

						document.getElementById("cuadro1").style.display = "block";
						document.getElementById("cuadro2").style.display = "none";
						document.getElementById("cuadro3").style.display = "none";
						document.getElementById("cuadro4").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo1").innerHTML = "1 resultado de la búsqueda para: "+search;

					}
					else if(search == "amazon"){

						document.getElementById("cuadro1").style.display = "none";
						document.getElementById("cuadro2").style.display = "block";
						document.getElementById("cuadro3").style.display = "none";
						document.getElementById("cuadro4").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo1").innerHTML = "1 resultado de la búsqueda para: "+search;

					}
					else if(search == "el corte ingles" || search == "el corte inglés"){

						document.getElementById("cuadro1").style.display = "none";
						document.getElementById("cuadro2").style.display = "none";
						document.getElementById("cuadro3").style.display = "block";
						document.getElementById("cuadro4").style.display = "none";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo1").innerHTML = "1 resultado de la búsqueda para: "+search;

					}
					else if(search == "media markt"){

						document.getElementById("cuadro1").style.display = "none";
						document.getElementById("cuadro2").style.display = "none";
						document.getElementById("cuadro3").style.display = "none";
						document.getElementById("cuadro4").style.display = "block";
						document.getElementById("tutor").style.display = "none";
						document.getElementById("titulo1").innerHTML = "1 resultado de la búsqueda para: "+search;

					}
					
					else if(search == "todo"){

						document.getElementById("cuadro1").style.display = "block";
						document.getElementById("cuadro2").style.display = "block";
						document.getElementById("cuadro3").style.display = "block";
						document.getElementById("cuadro4").style.display = "block";
						document.getElementById("tutor").style.display = "block";
						document.getElementById("titulo1").innerHTML = "";		

					}
					else{

						document.getElementById("cuadro1").style.display = "block";
						document.getElementById("cuadro2").style.display = "block";
						document.getElementById("cuadro3").style.display = "block";
						document.getElementById("cuadro4").style.display = "block";
						document.getElementById("tutor").style.display = "block";
						document.getElementById("titulo1").innerHTML = "";		
					
					}
						

				}


			}



// -----------------------------------------------TUTORIAL-----------------------------------------------------

	

		function entraTutorial(){

              document.getElementById("tutorial").style.display = "block";

       	}

      	function saleTutorial(){

        	document.getElementById("tutorial").style.display = "none";

     	}