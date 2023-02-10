



		function pasar(){

			document.getElementById("cajita").style.visibility = "visible";
			document.getElementById("boton").style.backgroundColor = "white";

		}

			let posar = document.getElementById("boton");

			posar.addEventListener("mouseover" , pasar);

		function salir(){

			document.getElementById("cajita").style.visibility = "hidden";
			document.getElementById("boton").style.backgroundColor = "#00a2e8";

		}

			let posar1 = document.getElementById("boton");

			posar1.addEventListener("mouseout" , salir);



		let pulsar = true;

		function aparece(){

			if(pulsar == true){

				document.getElementById("cuadro").style.display="block";
				



				pulsar = false;

			}

			else{

				document.getElementById("cuadro").style.display="none";

				pulsar = true;

			}

		}

		let muestra = document.getElementById("boton");

		muestra.addEventListener("click" , aparece);



		function pasarBoton1(){

			document.getElementById("cajita1").style.display = "block";

		}

			let posarse1 = document.getElementById("boton1");

			posarse1.addEventListener("mouseover" , pasarBoton1);

		function salirBoton1(){

			document.getElementById("cajita1").style.display = "none";

		}

			let salirse1 = document.getElementById("boton1");

			salirse1.addEventListener("mouseout" , salirBoton1);



		function gris(){

			document.getElementById("todo").style.filter="grayscale(100%)";

		}

			let cambiar = document.getElementById("boton1");

			cambiar.addEventListener("click" , gris);


		function color(){

			document.getElementById("todo").style.filter="grayscale(0%)";

		}

			let poner = document.getElementById("boton2");

			poner.addEventListener("click" , color);



		function pasarBoton2(){

			document.getElementById("cajita2").style.display = "block";

		}

			let posarse2 = document.getElementById("boton2");

			posarse2.addEventListener("mouseover" , pasarBoton2);

		function salirBoton2(){

			document.getElementById("cajita2").style.display = "none";

		}

			let salirse2 = document.getElementById("boton2");

			salirse2.addEventListener("mouseout" , salirBoton2);



		function estilomed(){

			 window.open("index.html","mediano","width=1000px");

		}

			// let mediano = document.getElementById("boton3");

			// mediano.addEventListener("click" , estilomed);

		function estilopeque(){

			window.open("index.html","pequeño","width=700px");

		}

			// let peque = document.getElementById("boton4");

			// peque.addEventListener("click" , estilopeque);

		function estilogrande(){

			window.open("index.html","grande","width=2000px");

		}

			// let grande = document.getElementById("boton5");

			// grande.addEventListener("click" , estilogrande);


		function pasarBoton3(){

			document.getElementById("cajita3").style.display = "block";

		}

			let posarse3 = document.getElementById("boton3");

			posarse3.addEventListener("mouseover" , pasarBoton3);

		function salirBoton3(){

			document.getElementById("cajita3").style.display = "none";

		}

			let salirse3 = document.getElementById("boton3");

			salirse3.addEventListener("mouseout" , salirBoton3);


		function pasarBoton4(){

			document.getElementById("cajita4").style.display = "block";

		}

			let posarse4 = document.getElementById("boton4");

			posarse4.addEventListener("mouseover" , pasarBoton4);

		function salirBoton4(){

			document.getElementById("cajita4").style.display = "none";

		}

			let salirse4 = document.getElementById("boton4");

			salirse4.addEventListener("mouseout" , salirBoton4);


		function pasarBoton5(){

			document.getElementById("cajita5").style.display = "block";

		}

			let posarse5 = document.getElementById("boton5");

			posarse5.addEventListener("mouseover" , pasarBoton5);

		function salirBoton5(){

			document.getElementById("cajita5").style.display = "none";

		}

			let salirse5 = document.getElementById("boton5");

			salirse5.addEventListener("mouseout" , salirBoton5);





// -----------------------------------------------------FONDO ALEATORIO----------------------------------------------------


		let fotos = [1,2,3,4,5,6,7,8,9,10,11,12];

		let numero = Math.round(Math.random()*11);

		//document.write('<body background="foto'+(numero+1)+'.jpg">');
		document.getElementById("todo").background = "foto"+(numero+1)+".jpg";



		function cambiafondo(){

			numero = Math.round(Math.random()*11);



			document.getElementById("todo").background = "foto"+(numero+1)+".jpg";

		}

		setInterval(cambiafondo,8000);

   

// --------------------------------------------------------PASAR POR ENCIMA MENÚ 1-----------------------------------------------------

		function pasarEncima1(){

			document.getElementById("azul1").style.backgroundColor = "#007eb4";
			document.getElementById("azul1").style.fontSize = "18pt";

		}

			let sobre1 = document.getElementById("azul1");

			sobre1.addEventListener("mouseover" , pasarEncima1);

		function volver1(){

			document.getElementById("azul1").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul1").style.fontSize = "14pt";

		}

			let salir1 = document.getElementById("azul1");

			salir1.addEventListener("mouseout" , volver1);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 2-----------------------------------------------------


		function pasarEncima2(){

			document.getElementById("azul2").style.backgroundColor = "#007eb4";
			document.getElementById("azul2").style.fontSize = "18pt";

		}

			let sobre2 = document.getElementById("azul2");

			sobre2.addEventListener("mouseover" , pasarEncima2);

		function volver2(){

			document.getElementById("azul2").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul2").style.fontSize = "14pt";

		}

			let salir2 = document.getElementById("azul2");

			salir2.addEventListener("mouseout" , volver2);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 3-----------------------------------------------------


		function pasarEncima3(){

			document.getElementById("azul3").style.backgroundColor = "#007eb4";
			document.getElementById("azul3").style.fontSize = "18pt";

		}

			let sobre3 = document.getElementById("azul3");

			sobre3.addEventListener("mouseover" , pasarEncima3);

		function volver3(){

			document.getElementById("azul3").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul3").style.fontSize = "14pt";

		}

			let salir3 = document.getElementById("azul3");

			salir3.addEventListener("mouseout" , volver3);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 4-----------------------------------------------------


		function pasarEncima4(){

			document.getElementById("azul4").style.backgroundColor = "#007eb4";
			document.getElementById("azul4").style.fontSize = "18pt";

		}

			let sobre4 = document.getElementById("azul4");

			sobre4.addEventListener("mouseover" , pasarEncima4);

		function volver4(){

			document.getElementById("azul4").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul4").style.fontSize = "14pt";

		}

			let salir4 = document.getElementById("azul4");

			salir4.addEventListener("mouseout" , volver4);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 5-----------------------------------------------------


		function pasarEncima5(){

			document.getElementById("azul5").style.backgroundColor = "#007eb4";
			document.getElementById("azul5").style.fontSize = "18pt";

		}

			let sobre5 = document.getElementById("azul5");

			sobre5.addEventListener("mouseover" , pasarEncima5);

		function volver5(){

			document.getElementById("azul5").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul5").style.fontSize = "14pt";

		}

			let salir5 = document.getElementById("azul5");

			salir5.addEventListener("mouseout" , volver5);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 6-----------------------------------------------------


		function pasarEncima6(){

			document.getElementById("azul6").style.backgroundColor = "#007eb4";
			document.getElementById("azul6").style.fontSize = "18pt";

		}

			let sobre6 = document.getElementById("azul6");

			sobre6.addEventListener("mouseover" , pasarEncima6);

		function volver6(){

			document.getElementById("azul6").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul6").style.fontSize = "14pt";

		}

			let salir6 = document.getElementById("azul6");

			salir6.addEventListener("mouseout" , volver6);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 7-----------------------------------------------------



		function pasarEncima7(){

			document.getElementById("azul7").style.backgroundColor = "#007eb4";
			document.getElementById("azul7").style.fontSize = "18pt";

		}

			let sobre7 = document.getElementById("azul7");

			sobre7.addEventListener("mouseover" , pasarEncima7);

		function volver7(){

			document.getElementById("azul7").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul7").style.fontSize = "14pt";

		}

			let salir7 = document.getElementById("azul7");

			salir7.addEventListener("mouseout" , volver7);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 8-----------------------------------------------------



		function pasarEncima8(){

			document.getElementById("azul8").style.backgroundColor = "#007eb4";
			document.getElementById("azul8").style.fontSize = "18pt";

		}

			let sobre8 = document.getElementById("azul8");

			sobre8.addEventListener("mouseover" , pasarEncima8);

		function volver8(){

			document.getElementById("azul8").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul8").style.fontSize = "14pt";

		}

			let salir8 = document.getElementById("azul8");

			salir8.addEventListener("mouseout" , volver8);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 9-----------------------------------------------------



		function pasarEncima9(){

			document.getElementById("azul9").style.backgroundColor = "#007eb4";
			document.getElementById("azul9").style.fontSize = "18pt";

		}

			let sobre9 = document.getElementById("azul9");

			sobre9.addEventListener("mouseover" , pasarEncima9);

		function volver9(){

			document.getElementById("azul9").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul9").style.fontSize = "14pt";

		}

			let salir9= document.getElementById("azul9");

			salir9.addEventListener("mouseout" , volver9);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 10-----------------------------------------------------



		function pasarEncima10(){

			document.getElementById("azul10").style.backgroundColor = "#007eb4";
			document.getElementById("azul10").style.fontSize = "18pt";

		}

			let sobre10 = document.getElementById("azul10");

			sobre10.addEventListener("mouseover" , pasarEncima10);

		function volver10(){

			document.getElementById("azul10").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul10").style.fontSize = "14pt";

		}

			let salir10 = document.getElementById("azul10");

			salir10.addEventListener("mouseout" , volver10);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 11-----------------------------------------------------



		function pasarEncima11(){

			document.getElementById("azul11").style.backgroundColor = "#007eb4";
			document.getElementById("azul11").style.fontSize = "18pt";

		}

			let sobre11 = document.getElementById("azul11");

			sobre11.addEventListener("mouseover" , pasarEncima11);

		function volver11(){

			document.getElementById("azul11").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul11").style.fontSize = "14pt";

		}

			let salir11 = document.getElementById("azul11");

			salir11.addEventListener("mouseout" , volver11);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 12-----------------------------------------------------



		function pasarEncima12(){

			document.getElementById("azul12").style.backgroundColor = "#007eb4";
			document.getElementById("azul12").style.fontSize = "18pt";

		}

			let sobre12 = document.getElementById("azul12");

			sobre12.addEventListener("mouseover" , pasarEncima12);

		function volver12(){

			document.getElementById("azul12").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul12").style.fontSize = "14pt";

		}

			let salir12 = document.getElementById("azul12");

			salir12.addEventListener("mouseout" , volver12);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 13-----------------------------------------------------



		function pasarEncima13(){

			document.getElementById("azul13").style.backgroundColor = "#007eb4";
			document.getElementById("azul13").style.fontSize = "18pt";

		}

			let sobre13 = document.getElementById("azul13");

			sobre13.addEventListener("mouseover" , pasarEncima13);

		function volver13(){

			document.getElementById("azul13").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul13").style.fontSize = "14pt";

		}

			let salir13 = document.getElementById("azul13");

			salir13.addEventListener("mouseout" , volver13);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 14-----------------------------------------------------



		function pasarEncima14(){

			document.getElementById("azul14").style.backgroundColor = "#007eb4";
			document.getElementById("azul14").style.fontSize = "18pt";

		}

			let sobre14 = document.getElementById("azul14");

			sobre14.addEventListener("mouseover" , pasarEncima14);

		function volver14(){

			document.getElementById("azul14").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul14").style.fontSize = "14pt";

		}

			let salir14 = document.getElementById("azul14");

			salir14.addEventListener("mouseout" , volver14);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 15-----------------------------------------------------



		function pasarEncima15(){

			document.getElementById("azul15").style.backgroundColor = "#007eb4";
			document.getElementById("azul15").style.fontSize = "18pt";

		}

			let sobre15 = document.getElementById("azul15");

			sobre15.addEventListener("mouseover" , pasarEncima15);

		function volver15(){

			document.getElementById("azul15").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul15").style.fontSize = "14pt";

		}

			let salir15 = document.getElementById("azul15");

			salir15.addEventListener("mouseout" , volver15);


// --------------------------------------------------------PASAR POR ENCIMA MENÚ 16-----------------------------------------------------



		function pasarEncima16(){

			document.getElementById("azul16").style.backgroundColor = "#007eb4";

		}

			let sobre16 = document.getElementById("azul16");

			sobre16.addEventListener("mouseover" , pasarEncima16);

		function volver16(){

			document.getElementById("azul16").style.backgroundColor = "rgba(0,163,232,0.7)";

		}

			let salir16 = document.getElementById("azul16");

			salir16.addEventListener("mouseout" , volver16);



// --------------------------------------------------------PASAR POR ENCIMA MENÚ 17-----------------------------------------------------



		function pasarEncima17(){

			document.getElementById("bajar").style.backgroundColor = "#007eb4";
			
		}

			let sobre17 = document.getElementById("bajar");

			sobre17.addEventListener("mouseover" , pasarEncima17);

		function volver17(){

			document.getElementById("bajar").style.backgroundColor = "rgba(0,163,232,0.7)";

		}

			let salir17 = document.getElementById("bajar");

			salir17.addEventListener("mouseout" , volver17);



// --------------------------------------------------------PASAR POR ENCIMA MENÚ 16-----------------------------------------------------



		function pasarEncima18(){

			document.getElementById("azul18").style.backgroundColor = "#007eb4";
			document.getElementById("azul18").style.fontSize = "17pt";

		}

			let sobre18 = document.getElementById("azul18");

			sobre18.addEventListener("mouseover" , pasarEncima18);

		function volver18(){

			document.getElementById("azul18").style.backgroundColor = "rgba(0,163,232,0.7)";
			document.getElementById("azul18").style.fontSize = "14pt";

		}

			let salir18 = document.getElementById("azul18");

			salir18.addEventListener("mouseout" , volver18);