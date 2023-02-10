

//------------------------------ CERRAR EL BANNER DE ANUNCIOS Y LAS COOKIES---------------------------------




		function quitar(){

			document.getElementById("ads").style.visibility="hidden";

		}

		let pulsar = document.getElementById("cerrar");

		pulsar.addEventListener("click" , quitar );

		function quitar1(){

			document.getElementById("cookies").style.visibility="hidden";

		}


		let aceptar = document.getElementById("continuar");

		aceptar.addEventListener("click" , quitar1);


//------------------------------ ABRIR Y CERRAR EL LOGO DE DISCAPACIDAD--------------------------------------






		let abrir = true;

		function disca(){

			if(abrir == true){

				document.getElementById("cuadro").style.visibility="visible";

				abrir = false;

			}

			else{

				document.getElementById("cuadro").style.visibility="hidden";

				abrir = true;

			}

		}

		let muestra = document.getElementById("logo");

		muestra.addEventListener("click" , disca);






//------------------------------ PASAR POR LOS BOTONES Y QUE SALGA MENSAJE--------------------------------------



		


		function grande(){

			document.getElementById("mensaje").innerHTML = '- Aumentar tamaño'; 
		}

		let pasar1 = document.getElementById("aumentar");

		pasar1.addEventListener("mouseover", grande);

		function salirgrande(){

			document.getElementById("mensaje").innerHTML = ''; 
		}

		let salir1 = document.getElementById("aumentar");

		salir1.addEventListener("mouseout", salirgrande);

		function normal(){

			document.getElementById("mensaje").innerHTML = '- Mantener tamaño'; 
		}

		let pasar2 = document.getElementById("mantener");

		pasar2.addEventListener("mouseover" , normal);

		function salirnormal(){

			document.getElementById("mensaje").innerHTML = ''; 
		}

		let salir2 = document.getElementById("mantener");

		salir2.addEventListener("mouseout", salirnormal);

		function peque(){

			document.getElementById("mensaje").innerHTML = '- Disminuir tamaño'; 
		}

		let pasar3 = document.getElementById("disminuir");

		pasar3.addEventListener("mouseover" , peque);

		function salirpeque(){

			document.getElementById("mensaje").innerHTML = ''; 
		}

		let salir3 = document.getElementById("disminuir");

		salir3.addEventListener("mouseout", salirpeque);

		function colorear(){

			document.getElementById("mensaje").innerHTML = '- Cambiarlo a color'; 
		}

		let pasar4 = document.getElementById("color");

		pasar4.addEventListener("mouseover" , colorear);

		function salircolorear(){

			document.getElementById("mensaje").innerHTML = ''; 
		}

		let salir4 = document.getElementById("color");

		salir4.addEventListener("mouseout", salircolorear);

		function grisaceo(){

			document.getElementById("mensaje").innerHTML = '- Cambiarlo a escala de grises'; 
		}

		let pasar5 = document.getElementById("grises");

		pasar5.addEventListener("mouseover" , grisaceo);

		function salirgrisaceo(){

			document.getElementById("mensaje").innerHTML = ''; 
		}

		let salir5 = document.getElementById("grises");

		salir5.addEventListener("mouseout", salirgrisaceo);

		function escuchar(){

			document.getElementById("mensaje").innerHTML = '- Añadir sonido'; 
		}

		let pasar6 = document.getElementById("oir");

		pasar6.addEventListener("mouseover" , escuchar);

		function salirescuchar(){

			document.getElementById("mensaje").innerHTML = ''; 
		}

		let salir6 = document.getElementById("oir");

		salir6.addEventListener("mouseout", salirescuchar);

		function sinimg(){

			document.getElementById("mensaje").innerHTML = '- Quitar imágenes'; 
		}

		let pasar7 = document.getElementById("noimg");

		pasar7.addEventListener("mouseover" , sinimg);

		function salirsinimg(){

			document.getElementById("mensaje").innerHTML = ''; 
		}

		let salir7 = document.getElementById("noimg");

		salir7.addEventListener("mouseout", salirsinimg);


		function ayudando(){

			document.getElementById("mensaje").innerHTML = '- Ayuda e Información'; 
		}

		let pasar8 = document.getElementById("ayudar");

		pasar8.addEventListener("mouseover" , ayudando);


		function salirayudando(){

			document.getElementById("mensaje").innerHTML = ''; 
		}

		let salir8 = document.getElementById("ayudar");

		salir8.addEventListener("mouseout", salirayudando);

		




//------------------------------ PINCHAR Y RECIBIR EL NÚMERO DE TELÉFONO---------------------------------------






		function solicitar(){

			alert("Información y ayuda en el teléfono: 902 123 123"); 
		}

		let clickear = document.getElementById("ayudar");

		clickear.addEventListener("click" , solicitar);





//------------------------------ ESCALA DE GRISES Y DE COLOR------------------------------------------------





		function gris1(){

			document.getElementById("todo").style.filter="grayscale(100%)";

		}

			let bn = document.getElementById("grises");

			bn.addEventListener("click" , gris1);


		function col1(){

			document.getElementById("todo").style.filter="grayscale(0%)";

		}

			let col = document.getElementById("color");

			col.addEventListener("click" , col1);






//------------------------------ QUITAR IMÁGENES Y VOLVER A PONERLAS-------------------------------------------






		let elim = true;

		function eliminar(){

			if(elim == true){

				document.getElementById("foto1").style.width="0px";
				document.getElementById("foto1").style.height="0px";
				document.getElementById("foto2").style.width="0px";
				document.getElementById("foto2").style.height="0px";
				document.getElementById("foto3").style.width="0px";
				document.getElementById("foto3").style.height="0px";
				document.getElementById("foto4").style.width="0px";
				document.getElementById("foto4").style.height="0px";

				elim = false;

			}

			else{

				document.getElementById("foto1").style.width="256px";
				document.getElementById("foto1").style.height="256px";
				document.getElementById("foto2").style.width="256px";
				document.getElementById("foto2").style.height="256px";
				document.getElementById("foto3").style.width="256px";
				document.getElementById("foto3").style.height="256px";
				document.getElementById("foto4").style.width="256px";
				document.getElementById("foto4").style.height="256px";

				elim = true;

			}

		}

		let elimina = document.getElementById("noimg");

		elimina.addEventListener("click" , eliminar);





//------------------------------ AUMENTAR, MANTENER Y DISMINUIR TAMAÑO DEL TEXTO-------------------------------




		let letra = 12;

		function agrandar(){
			let parrafos = document.getElementsByClassName("text");
			letra++;
			for (texto of parrafos){
			texto.style.fontSize = letra+'pt';
			}
		}

			let bigger = document.getElementById("aumentar");

			bigger.addEventListener("click", agrandar);


		function menguar(){
			let parrafos = document.getElementsByClassName("text");
			letra--
			for (texto of parrafos){
			texto.style.fontSize = letra+'pt';
			}
		}

			let small = document.getElementById("disminuir");

			small.addEventListener("click", menguar);


		function restaurar(){
			let parrafos = document.getElementsByClassName("text");
			for (texto of parrafos){
			letra = 12;
			texto.style.fontSize = letra+'pt';
			}
		}

			let normally = document.getElementById("mantener");

			normally.addEventListener("click", restaurar);




//----------------------------------------- SONIDO--------------------------------------------------------




		let saleSonido = true;

		function suena(){

			if(saleSonido == true){

				document.getElementById("sonido1").style.visibility="visible";
				document.getElementById("sonido2").style.visibility="visible";
				document.getElementById("sonido3").style.visibility="visible";
				document.getElementById("sonido4").style.visibility="visible";

				saleSonido = false;

			}

			else{

				document.getElementById("sonido1").style.visibility="hidden";
				document.getElementById("sonido2").style.visibility="hidden";
				document.getElementById("sonido3").style.visibility="hidden";
				document.getElementById("sonido4").style.visibility="hidden";

				saleSonido = true;

			}

		}

		let muestraSonido = document.getElementById("oir");

		muestraSonido.addEventListener("click" , suena);




		let sonando = false;

	

		function sonar(){

			if(sonando==false){

				document.getElementById("sonido1").play();
				document.getElementById("sonido2").play();
				document.getElementById("sonido3").play();
				document.getElementById("sonido4").play();

				sonando = true;

			}

			else if(sonando==true){

				document.getElementById("sonido1").pause();
				document.getElementById("sonido2").pause();
				document.getElementById("sonido3").pause();
				document.getElementById("sonido4").pause();

				sonando = false;

			}

		}

		let logoSonido1 = document.getElementById("sonido1");
		let logoSonido2 = document.getElementById("sonido2");
		let logoSonido3 = document.getElementById("sonido3");
		let logoSonido4 = document.getElementById("sonido4");

		logoSonido1.addEventListener("click", sonar);
		logoSonido2.addEventListener("click", sonar);
		logoSonido3.addEventListener("click", sonar);
		logoSonido4.addEventListener("click", sonar);