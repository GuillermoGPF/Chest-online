



// ----------------------------------------VALIDACIÓN DEL USUARIO Y CONTRASEÑA--------------------------------------------


		function entrar(){

			let idioma = document.lenguaje.idioma.value;

			if(idioma == "Español"){

				let user = document.getElementById("usuario").value;
				let pass = document.getElementById("contraseña").value;

				if (user == "Guiller" && pass == "archer"){

					window.location.replace("index.html");

				}
				else if(user == "" && pass == ""){

					alert("Por favor, vuelva a intentarlo");

				}
				else if(user == "Guiller" && pass == ""){

					alert("Por favor, introduzca su contraseña");

				}
				else if(user == "" && pass == "archer"){

					alert("Por favor, introduza su nombre de usuario");

				}
			// else if(user == "undefined" && pass == "undefined"){

			// 	alert("Usuario y contraseña incorrectos. Vuelva a repetir");

			// }
			// else if(user == "Lord Guiller" && pass == "undefined"){

			// 	alert("Contraseña incorrecta. Por favor, vuelva a repetir");

			// }
			// else if(user == "undefined" && pass == "archer"){

			// 	alert("Nombre de usuario incorrecto. Por favopr, vuelva a repetir");

			// }
				else{

					alert("Nombre de usuario o contraseña incorrectos. Por favor, vuelva a repetir ");

				}

			}
			else if(idioma == "English"){

				let user2 = document.getElementById("usuario2").value;
				let pass2 = document.getElementById("contraseña2").value;

				if (user2 == "Guiller" && pass2 == "archer"){

					window.location.replace("index.html");

				}
				else if(user2 == "" && pass2 == ""){

					alert("Please, try again");

				}
				else if(user2 == "Guiller" || pass2 == ""){

					alert("Please enter your password");

				}
				else if(user2 == "" && pass2 == "archer"){

					alert("Please enter your username");

				}
				else{

					alert("Username or password incorrect. Please repeat again");

				}

			}

		}
		let enter = document.getElementById("boton");
		enter.addEventListener("click" , entrar);

		let enter2 = document.getElementById("boton2");
		enter2.addEventListener("click" , entrar);
		
		function apretar(){

			let tecla = event.keyCode;

			if(tecla == "13"){


				let idioma = document.lenguaje.idioma.value;

				if(idioma == "Español"){

					let user = document.getElementById("usuario").value;
					let pass = document.getElementById("contraseña").value;

					if (user == "Guiller" && pass == "archer"){

						window.location.replace("index.html");

					}
					else if(user == "" && pass == ""){

						alert("Por favor, vuelva a intentarlo");

					}
					else if(user == "Guiller" || pass == ""){

						alert("Por favor, introduzca su contraseña");

					}
					else if(user == "" && pass == "archer"){

						alert("Por favor, introduza su nombre de usuario");

					}
					else{

						alert("Nombre de usuario o contraseña incorrectos. Por favor, vuelva a repetir ");

					}
				}

				else if(idioma == "English"){

					let user2 = document.getElementById("usuario2").value;
					let pass2 = document.getElementById("contraseña2").value;

					if (user2 == "Guiller" && pass2 == "archer"){

						window.location.replace("index.html");

					}
					else if(user2 == "" && pass2 == ""){

						alert("Please, try again");

					}
					else if(user2 == "Guiller" || pass2 == ""){

						alert("Please enter your password");

					}
					else if(user2 == "" && pass2 == "archer"){

						alert("Please enter your username");

					}
					else{

						alert("Username or password incorrect. Please repeat again");

					}

				}

			}

		}

		function idiomas(){

			
			let idioma = document.lenguaje.idioma.value;

			
			if(idioma == "Español"){
					
				document.getElementById("titulo").innerHTML = "Por favor inicie sesión";
				document.getElementById("titulo1").innerHTML = "¿QUIÉNES SOMOS?";
				document.getElementById("texto1").innerHTML = "Somos una empresa tecnológica dedicada a englobar el mayor número de páginas web en una sola, simplificando todo en una misma cuenta.";
				document.getElementById("titulo2").innerHTML = "¿EN QUÉ CONSISTE ARCHER?";
				document.getElementById("texto2").innerHTML = "Consiste en que tengas tus páginas favoritas en una sola página, una única cuenta y un único pago."
				document.getElementById("titulo3").innerHTML = "¿CUÁNTO CUESTA Y COMO PAGARLO?";
				document.getElementById("texto3").innerHTML = "El precio varía según las páginas que tengas contratadas. Pero si tienes, por ejemplo, 3 cuentas en distintas páginas, se hace un único pago, mensual o anual según elija, reduciendo así el precio final."
				document.getElementById("pie1").innerHTML = "Aviso legal";
				document.getElementById("pie2").innerHTML = "Términos y condiciones";
				document.getElementById("pie3").innerHTML = "Política de privacidad";
				document.getElementById("pie4").innerHTML = "Idiomas";
				document.getElementById("usuario").style.display = "block";
				document.getElementById("contraseña").style.display = "block";
				document.getElementById("boton").style.display = "block";
				document.getElementById("usuario2").style.display = "none";
				document.getElementById("contraseña2").style.display = "none";
				document.getElementById("boton2").style.display = "none";

			}
			else if(idioma == "English"){
	
				document.getElementById("titulo").innerHTML = "Please login";
				document.getElementById("titulo1").innerHTML = "ABOUT US";
				document.getElementById("texto1").innerHTML = "We are a technology company dedicated to encompassing the largest number of web pages in one, simplifying everything in the same account.";
				document.getElementById("titulo2").innerHTML = "WHAT IS ARCHER";
				document.getElementById("texto2").innerHTML = "It consists of having your favorite pages on a single page, a single account and a single payment."
				document.getElementById("titulo3").innerHTML = "HOW MUCH DOES IT COST AND HOW TO PAY IT";
				document.getElementById("texto3").innerHTML = "The price varies according to the pages you have hired. But if you have, for example, 3 accounts on different pages, a single payment is made, monthly or yearly as you choose, thus reducing the final price."
				document.getElementById("pie1").innerHTML = "Legal warning";
				document.getElementById("pie2").innerHTML = "Terms and Conditions";
				document.getElementById("pie3").innerHTML = "Privacy Policy";
				document.getElementById("pie4").innerHTML = "Languages";
				document.getElementById("usuario").style.display = "none";
				document.getElementById("contraseña").style.display = "none";
				document.getElementById("boton").style.display = "none";
				document.getElementById("usuario2").style.display = "block";
				document.getElementById("contraseña2").style.display = "block";
				document.getElementById("boton2").style.display = "block";


			}
			

		}