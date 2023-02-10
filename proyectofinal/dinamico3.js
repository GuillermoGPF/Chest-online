



// ------------------------------------------------------MOVER LOGO 1-----------------------------------------------
	

          function allowDrop(ev){

            ev.preventDefault();

          }

          function drag(ev){

            ev.dataTransfer.setData("text", ev.target.id);

          }

          function drop(ev,el){

              ev.stopPropagation();

              ev.preventDefault();

              var data = ev.dataTransfer.getData("text");

              ev.target.appendChild(document.getElementById(data));

              if(precio += parseInt(document.getElementById(data).value)){

                  console.log(document.getElementById(data).value);
              }
              else if(precio != parseInt(document.getElementById(data).value)){

              alert("Por favor, seleccione primero el tipo de suscripción deseado, anual o mensual. Para volver, actualice la página")

              }



          }




// ----------------------------------------------------CALCULAR LOS PRECIOS--------------------------------------------


          let precio = 0;

          function calcular(){

            let tipoSuscrip = document.suscripcion.tipo.value;

            if(tipoSuscrip == "mensual"){

                // alert(precio);

                let preciofinal = precio;

                for (i=1;i<=1;i++){

                let anuncios = prompt("¿Cuántos anuncios ha compartido en el último mes? Recuerde que tiene un máximo de 10.");

                    if(anuncios=="0"){preciofinal=preciofinal-anuncios}
                    else if(anuncios=="1"){preciofinal=preciofinal-anuncios}
                    else if(anuncios=="2"){preciofinal=preciofinal-anuncios}
                    else if(anuncios=="3"){preciofinal=preciofinal-anuncios}
                    else if(anuncios=="4"){preciofinal=preciofinal-anuncios}
                    else if(anuncios=="5"){preciofinal=preciofinal-anuncios}
                    else if(anuncios=="6"){preciofinal=preciofinal-anuncios}
                    else if(anuncios=="7"){preciofinal=preciofinal-anuncios}
                    else if(anuncios=="8"){preciofinal=preciofinal-anuncios}
                    else if(anuncios==-"9"){preciofinal=preciofinal-anuncios}
                    else if(anuncios=="10"){preciofinal=preciofinal-anuncios}
                    else if(anuncios>"10"){alert("Ha sobrepasado el límite, por favor, vuelva a introducir");}
                }

                // alert(preciofinal);

                let cupones = confirm("¿Dispone de cupones de descuento en aplicaciones y páginas?");

                if(cupones == true){
                  let descuento = prompt("¿Qué cupones son?");
                    if(descuento == "prime"){preciofinal = preciofinal - (preciofinal * 0.1)}
                    else if(descuento == "aws"){preciofinal = preciofinal - (preciofinal * 0.2)}
                    else if(descuento == "dropbox"){preciofinal = preciofinal - (preciofinal * 0.2)}
                    else if(descuento == "netflix"){preciofinal = preciofinal - 10}
                    else if(descuento == "hbo"){preciofinal = preciofinal - 9}
                }
                else if(cupones == false){

                    document.getElementById("precio").innerHTML = +preciofinal+"€"
                    document.getElementById("precio1").innerHTML = "Antes te salía todo por: "+precio+"€ al mes."
                    document.getElementById("precio2").innerHTML = "Ahora te sale por: "+preciofinal+"€ al mes."
                    document.getElementById("desglose").innerHTML = "Te hemos desglosado cupones, descuentos, ingresos por anuncios, etc."

                }

              // alert(preciofinal);

              document.getElementById("precio").innerHTML = +preciofinal+"€"
              document.getElementById("precio1").innerHTML = "Antes te salía todo por: "+precio+"€ al mes."
              document.getElementById("precio2").innerHTML = "Ahora te sale por: "+preciofinal+"€ al mes."
              document.getElementById("desglose").innerHTML = "Te hemos desglosado cupones, descuentos, ingresos por anuncios, etc."

            }

            else if(tipoSuscrip == "anual"){

              // alert(precio);

                let preciofinal = precio;

                for (i=1;i<=1;i++){

                let anuncios = prompt("¿Cuántos anuncios ha compartido en el último año? Recuerde que tiene un máximo de 120.");

                    if(anuncios=="0"){preciofinal=preciofinal-anuncios}
                    else if(anuncios<="12"){preciofinal=preciofinal-anuncios}
                    else if(anuncios<="24"){preciofinal=preciofinal-anuncios}
                    else if(anuncios<="36"){preciofinal=preciofinal-anuncios}
                    else if(anuncios<="48"){preciofinal=preciofinal-anuncios}
                    else if(anuncios<="60"){preciofinal=preciofinal-anuncios}
                    else if(anuncios<="72"){preciofinal=preciofinal-anuncios}
                    else if(anuncios<="84"){preciofinal=preciofinal-anuncios}
                    else if(anuncios<="96"){preciofinal=preciofinal-anuncios}
                    else if(anuncios<="108"){preciofinal=preciofinal-anuncios}
                    else if(anuncios<="120"){preciofinal=preciofinal-anuncios}
                    else if(anuncios>"120"){alert("Ha sobrepasado el límite, por favor, vuelva a introducir");}
                }

                // alert(preciofinal);

                let cupones = confirm("¿Dispone de cupones de descuento en aplicaciones y páginas?");

                if(cupones==true){
                  let descuento = prompt("¿Qué cupones son?");
                    if(descuento == "prime"){preciofinal = preciofinal - (preciofinal * 2.5)}
                    else if(descuento == "aws"){preciofinal = preciofinal - (preciofinal * 3)}
                    else if(descuento == "dropbox"){preciofinal = preciofinal - (preciofinal * 3)}
                    else if(descuento == "netflix"){preciofinal = preciofinal - 50}
                    else if(descuento == "hbo"){preciofinal = preciofinal - 60}
                }

              // alert(preciofinal);

              document.getElementById("precio").innerHTML = +preciofinal+"€"
              document.getElementById("precio1").innerHTML = "Antes te salía todo por: "+precio+"€ al año."
              document.getElementById("precio2").innerHTML = "Ahora te sale por: "+preciofinal+"€ al año."
              document.getElementById("desglose").innerHTML = "Te hemos desglosado cupones, descuentos, ingresos por anuncios, etc."


            }


          }

        

        function suscripciones(){

            let tipoSuscrip = document.suscripcion.tipo.value;

            if(tipoSuscrip == "mensual"){

                document.getElementById("drag1").value = "3";
                document.getElementById("drag2").value = "2";
                document.getElementById("drag3").value = "3";
                document.getElementById("drag4").value = "15";
                document.getElementById("drag5").value = "10";
                document.getElementById("drag6").value = "2";
                document.getElementById("drag7").value = "8";
                document.getElementById("drag8").value = "9";
                document.getElementById("drag9").value = "8";
                document.getElementById("drag10").value = "3";

            }
            else if(tipoSuscrip == "anual"){

                document.getElementById("drag1").value = "36";
                document.getElementById("drag2").value = "24";
                document.getElementById("drag3").value = "36";
                document.getElementById("drag4").value = "180";
                document.getElementById("drag5").value = "120";
                document.getElementById("drag6").value = "24";
                document.getElementById("drag7").value = "96";
                document.getElementById("drag8").value = "108";
                document.getElementById("drag9").value = "96";
                document.getElementById("drag10").value = "36";

            }

        }




// -------------------------------------------------------CERRAR SESIÓN----------------------------------------------
       

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





// -----------------------------------------------APARECE LA X Y ELIMINA EL LOGO-------------------------------------

          
        let abrir = true;

        function apareceEquis1(){

            if(abrir == true){

              document.getElementById("equis1").style.visibility = "visible";

              abrir = false;
            }
            else{

              document.getElementById("equis1").style.visibility = "hidden";

              abrir = true;

            }
        } 

        function desaparece1(){

        document.getElementById("drag1").style.visibility = "hidden";
        document.getElementById("equis1").style.visibility = "hidden";

        abrir = false;

      }

     function apareceEquis2(){

            if(abrir == true){

              document.getElementById("equis2").style.visibility = "visible";

              abrir = false;
            }
            else{

              document.getElementById("equis2").style.visibility = "hidden";

              abrir = true;

            }
        } 

        function desaparece2(){

        document.getElementById("drag2").style.visibility = "hidden";
        document.getElementById("equis2").style.visibility = "hidden";

        abrir = false;

      }


      function apareceEquis3(){

            if(abrir == true){

              document.getElementById("equis3").style.visibility = "visible";

              abrir = false;
            }
            else{

              document.getElementById("equis3").style.visibility = "hidden";

              abrir = true;

            }
        } 

        function desaparece3(){

        document.getElementById("drag3").style.visibility = "hidden";
        document.getElementById("equis3").style.visibility = "hidden";

        abrir = false;

      }


      function apareceEquis4(){

            if(abrir == true){

              document.getElementById("equis4").style.visibility = "visible";

              abrir = false;

            }
            else{

              document.getElementById("equis4").style.visibility = "hidden";

              abrir = true;

            }
        } 

        function desaparece4(){

        document.getElementById("drag4").style.visibility = "hidden";
        document.getElementById("equis4").style.visibility = "hidden";

        abrir = false;

      }


      function apareceEquis5(){

            if(abrir == true){

              document.getElementById("equis5").style.visibility = "visible";

              abrir = false;

            }
            else{

              document.getElementById("equis5").style.visibility = "hidden";

              abrir = true;

            }
        } 

        function desaparece5(){

        document.getElementById("drag5").style.visibility = "hidden";
        document.getElementById("equis5").style.visibility = "hidden";

        abrir = false;

      }


      function apareceEquis6(){

            if(abrir == true){

              document.getElementById("equis6").style.visibility = "visible";

              abrir = false;

            }
            else{

              document.getElementById("equis6").style.visibility = "hidden";

              abrir = true;

            }
        }  

        function desaparece6(){

        document.getElementById("drag6").style.visibility = "hidden";
        document.getElementById("equis6").style.visibility = "hidden";

        abrir = false;

      }


          function apareceEquis7(){

            if(abrir == true){

              document.getElementById("equis7").style.visibility = "visible";

              abrir = false;

            }
            else{

              document.getElementById("equis7").style.visibility = "hidden";

              abrir = true;

            }
        } 

        function desaparece7(){

        document.getElementById("drag7").style.visibility = "hidden";
        document.getElementById("equis7").style.visibility = "hidden";

        abrir = false;

        }


        function apareceEquis8(){

            if(abrir == true){

              document.getElementById("equis8").style.visibility = "visible";

              abrir = false;

            }
            else{

              document.getElementById("equis8").style.visibility = "hidden";

              abrir = true;

            }
        } 


        function desaparece8(){

        document.getElementById("drag8").style.visibility = "hidden";
        document.getElementById("equis8").style.visibility = "hidden";

        abrir = false;

      }


      function apareceEquis9(){

            if(abrir == true){

              document.getElementById("equis9").style.visibility = "visible";

              abrir = false;

            }
            else{

              document.getElementById("equis9").style.visibility = "hidden";

              abrir = true;

            }
        }  

        function desaparece9(){

        document.getElementById("drag9").style.visibility = "hidden";
        document.getElementById("equis9").style.visibility = "hidden";

        abrir = false;

      }


      function apareceEquis10(){

            if(abrir == true){

              document.getElementById("equis10").style.visibility = "visible";

              abrir = false;

            }
            else{

              document.getElementById("equis10").style.visibility = "hidden";

              abrir = true;

            }
        }  

        function desaparece10(){

        document.getElementById("drag10").style.visibility = "hidden";
        document.getElementById("equis10").style.visibility = "hidden";

        abrir = false;

      }


      function restaurar(){

        document.getElementById("drag1").style.visibility = "visible";
        document.getElementById("drag2").style.visibility = "visible";
        document.getElementById("drag3").style.visibility = "visible";
        document.getElementById("drag4").style.visibility = "visible";
        document.getElementById("drag5").style.visibility = "visible";
        document.getElementById("drag6").style.visibility = "visible";
        document.getElementById("drag7").style.visibility = "visible";
        document.getElementById("drag8").style.visibility = "visible";
        document.getElementById("drag9").style.visibility = "visible";
        document.getElementById("drag10").style.visibility = "visible";


      }

      function entraTutorial(){

        document.getElementById("tutorial").style.display = "block";

      }

      function saleTutorial(){

        document.getElementById("tutorial").style.display = "none";

      }




// --------------------------------------------------BOTÓN MENÚ--------------------------------------------------------


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




// ----------------------------------------CAMBIAR COLOR MENÚ RESPONSIVE--------------------------------------------


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
