



		function resultado(){

			let a = document.contacto.nombre.value;

			let b = document.contacto.apellidos.value;

			let c = document.contacto.nacimiento.value;

			let d = document.contacto.direccion.value;

			let e = document.contacto.correo.value;

			let f = document.contacto.telefono.value;



			let confirmar = confirm("Se llama " + a +" "+ b +". Nació el "+ c +" y vive en "+ d +". Su correo es "+ e +" y su telefono es "+ f +
				" ¿Es correcto?");

				if(confirmar == true){alert("Ya está registrado");}
				else if(confirmar == false){alert("No se ha registrado");}

				}

	
	


			let fotos=["01","02","03","04"];

			let textos=["Mariano<br>Mantenimiento", "Luis<br>Contable", "Carlos<br>Administrativo", "Julio<br>Repartidor"];

			let numero = Math.round(Math.random()*3);

			let mensaje = textos[numero];





		function calcular(){
		
			let peso = document.envio.peso.value;

			let ancho = document.envio.ancho.value;
			let alto = document.envio.alto.value;
			let profundo = document.envio.profundo.value;
			let volumen = (alto*ancho*profundo)/1000;

			let origen, destino, precio;

			if(document.envio.oES.checked==true){origen="ES"}
			if(document.envio.oEU.checked==true){origen="EU"}
			if(document.envio.dES.checked==true){destino="ES"}
			if(document.envio.dEU.checked==true){destino="EU"}

			if (origen == "ES" && destino == "ES"){
			precio = 4.95;
			}
			else if (origen == "ES" && destino == "EU"){
			precio = 7.95;
			}
			else if (origen == "EU" && destino == "ES"){
			precio = 7.95;
			}
			else if (origen == "EU" && destino == "EU"){
			precio = 11.95;
			}


			if (peso<=1000){precio*=1}
			else if (peso>1000 && peso<5000){precio*=1.2}
			else if (peso>=5000){precio*=1.5}

			if (volumen<=10){precio*=1}
			else if (volumen>10 && volumen<20){precio*=1.5}
			else if (volumen>=20){precio*=2}


			let tipo = document.envio.tipo.value;

				if (tipo==24){
					precio+=0;
				}
				else if (tipo==48){
					precio-=2;
				}
				else if (tipo==10){
					precio+=5;
				}
			
			if(document.envio.seguro.checked==true){precio+=12}


			precioFinal = precio.toFixed(2);

			alert("El coste de su envío es: "+precioFinal+" €");

			}