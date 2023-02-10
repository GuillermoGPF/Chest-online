



			let precio1 = 19.95;
			let precio2 = 17.95;
			let precio3 = 19.95;
			let precio4 = 18.95;
			let precio5 = 24.95;
			let precioFinal;


			function cambia1(){
				const preF1 = 19.95;
				cantidad1 = document.getElementById("articulo1").value;
				precio1 = parseFloat((preF1 * cantidad1).toFixed(2));
				document.getElementById("mensaje1").innerHTML = precio1+"€";}

				let camb1 = document.getElementById("articulo1");
				camb1.addEventListener("change", cambia1);


			function cambia2(){
				const preF2 = 17.95;
				cantidad2 = document.getElementById("articulo2").value;
				precio2 = parseFloat((preF2 * cantidad2).toFixed(2));
				document.getElementById("mensaje2").innerHTML = precio2+"€";}

				let camb2 = document.getElementById("articulo2");
				camb2.addEventListener("change", cambia2);


			function cambia3(){
				const preF3 = 19.95;
				cantidad3 = document.getElementById("articulo3").value;
				precio3 = parseFloat((preF3 * cantidad3).toFixed(2));
				document.getElementById("mensaje3").innerHTML = precio3+"€";}

				let camb3 = document.getElementById("articulo3");
				camb3.addEventListener("change", cambia3);


			function cambia4(){
				const preF4 = 18.95;
				cantidad4 = document.getElementById("articulo4").value;
				precio4 = parseFloat((preF4 * cantidad4).toFixed(2));
				document.getElementById("mensaje4").innerHTML = precio4+"€";}

				let camb4 = document.getElementById("articulo4");
				camb4.addEventListener("change", cambia4);


			function cambia5(){
				const preF5 = 24.95;
				cantidad5 = document.getElementById("articulo5").value;
				precio5 = parseFloat((preF5 * cantidad5).toFixed(2));
				document.getElementById("mensaje5").innerHTML = precio5+"€";}

				let camb5 = document.getElementById("articulo5");
				camb5.addEventListener("change", cambia5);

			function calcularTotal(){

				let precio = 0;

					let envio = document.formu2.envio.value;

					if (envio =="correos"){
						precio += 0;
					}
					else if (envio == "seur48"){
						precio += 6;
					}
					else if (envio == "seur24"){
						precio += 9;
					}


					let destino = document.formu2.destino.value;

					if (destino == "madrid"){
						precio += 3;
					}
					else if (destino == "peninsula"){
						precio += 5;
					}
					else if (destino == "islas"){
						precio += 10;
					}


					if(document.formu2.peanas.checked==true){
						precio += 3;
					}
					if(document.formu2.pintadas.checked==true){
						precio += 30;
					}
					if(document.formu2.regalo.checked==true){
						precio += 2;
					}


					if (document.getElementById("radio1").checked)
    				{
    				  precio -= ((precioFinal * 5)/100);
    				}
    				else if (document.getElementById("radio2").checked)
    				{
    				  precio += 0; 
    				}
    				else if (document.getElementById("radio3").checked)
    				{
    				  precio += ((precioFinal * 3)/100);
    				}


				precioFinal = precio1 + precio2 + precio3 + precio4 + precio5 + precio;
				document.getElementById("mensajefinal").innerHTML = precioFinal.toFixed(2)+"€";

			}
				let preFin = document.getElementById("calcular");
				preFin.addEventListener("click" , calcularTotal);


			function quitar1(){
				document.getElementById("uno").style.display="none";
				precio1 = 0;}

			function quitar2(){
				document.getElementById("dos").style.display="none";
				precio2 = 0;}

			function quitar3(){
				document.getElementById("tres").style.display="none";
				precio3 = 0;}

			function quitar4(){
				document.getElementById("cuatro").style.display="none";
				precio4 = 0;}

			function quitar5(){
				document.getElementById("cinco").style.display="none";
				precio5 = 0;}

			function compra(){

			let a = document.formu1.nombre.value;
			let b = document.formu1.ape1.value;
			let c = document.formu1.ape2.value;
			let d = document.formu1.socio.value;
			let e = document.formu1.email.value;
			let f = document.formu1.telef.value;
			let g = document.formu1.user.value;
			let h = document.formu1.pass.value;

			alert("Estimado señor "+a+" "+b+" "+c+" con número de socio "+d+" correo "+e+
				" y teléfono "+f+
				" .Le Agradecemos su compra. Puede contar con nosotros para lo que necesite. El total de su compra es: "
				+(precioFinal.toFixed(2))+ "€.");}

		let comp = document.getElementById("boton");
		comp.addEventListener("click" , compra);