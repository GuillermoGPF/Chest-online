



// --------------------------------------------SLIDER PUBLICIDAD------------------------------------------



		window.addEventListener("keydown", verTecla);

		document.getElementById("despues").addEventListener("click", moverIzq);
		document.getElementById("antes").addEventListener("click", moverDch);

		function verTecla(){

			let teclaPulsada = event.keyCode;

			if(teclaPulsada == "37"){

				moverDch();

			}
			else if(teclaPulsada == "39"){

				moverIzq();

			}

		}
	
		let i=1;

		function moverIzq(){

			if(i<4){

				document.getElementById("caja"+i).style.left = "-1800px";

				i++;

				document.getElementById("caja"+i).style.left = "0px";

			}

		}

		function moverDch(){

			if(i>1){

				document.getElementById("caja"+i).style.left = "1800px";

				i--;

				document.getElementById("caja"+i).style.left = "0px";

			}

		}



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