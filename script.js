let p = {
	/*propiedades para guardar elementos del DOM*/
	botones: document.querySelector("#contenedor"),
	/*propiedades para verificar el juego*/
	botonUno: document.querySelector("#boton-uno"),
	botonDos: document.querySelector("#boton-dos"),
	botonTres: document.querySelector("#boton-tres"),
	botonCuatro: document.querySelector("#boton-cuatro"),
	botonCinco: document.querySelector("#boton-cinco"),
	botonSeis: document.querySelector("#boton-seis"),
	botonSiete: document.querySelector("#boton-siete"),
	botonOcho: document.querySelector("#boton-ocho"),
	botonNueve: document.querySelector("#boton-nueve"),
	reiniciar: document.querySelector(".reiniciar"),
	/*propiedades para guardar elementos del DOM*/
	ganador: document.querySelector("#ganador"),
	/*propiedades auxiliares*/
	verificador: 1,
	contador: 0
}

let m = {
	inicio: () => { /*añade eventos a las celdas y al boton de volver a jugar*/
		for (var i = 0; i < p.botones.children.length; i++) { /*selecciona los hijos del elemento como un array*/
			p.botones.children[i].addEventListener("click",m.marcarCelda);
		}
		p.reiniciar.addEventListener('click',m.reiniciar); 

	},
	reiniciar: () => { /*reinicia propiedades para una nueva partida*/
		for (var i = 0; i < p.botones.children.length; i++) {
			p.botones.children[i].textContent = ""; /*limpia las celdas*/
			p.verificador = 1;
			p.contador = 0;
			p.ganador.textContent = ''; /*remueve el mensaje de ganador*/
			p.reiniciar.className = 'd-none'; /*oculta el boton en el DOM  usando bootstrap*/
		}		
	},
	marcarCelda: (e) => { /*escribe una X o 0*/

		if(p.verificador == 1 && e.target.textContent == ""){ /*verifica la celda esta vacia y el jugador*/
			e.target.textContent = 'x'; /*escribe una "x"*/
			p.contador++
			/*posibilidades del jugador 1*/
			if(p.botonUno.textContent =='x' && p.botonDos.textContent =='x' && p.botonTres.textContent =='x'){
				p.ganador.textContent = 'ganador: jugandor 1'; /*mensaje de ganador*/
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25'; /*revela el boton de volver a jugar*/
				p.verificador = 0;	/*indica que se termino el juego*/
			}else if(p.botonCuatro.textContent =='x' && p.botonCinco.textContent =='x' && p.botonSeis.textContent =='x'){
				p.ganador.textContent = 'ganador: jugandor 1';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonSiete.textContent =='x' && p.botonOcho.textContent =='x' && p.botonNueve.textContent =='x'){
				p.ganador.textContent = 'ganador: jugandor 1';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonUno.textContent =='x' && p.botonCuatro.textContent =='x' && p.botonSiete.textContent =='x'){
				p.ganador.textContent = 'ganador: jugandor 1';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonDos.textContent =='x' && p.botonCinco.textContent =='x' && p.botonOcho.textContent =='x'){
				p.ganador.textContent = 'ganador: jugandor 1';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonTres.textContent =='x' && p.botonSeis.textContent =='x' && p.botonNueve.textContent =='x'){
				p.ganador.textContent = 'ganador: jugandor 1';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonUno.textContent =='x' && p.botonCinco.textContent =='x' && p.botonNueve.textContent =='x'){
				p.ganador.textContent = 'ganador: jugandor 1';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonSiete.textContent =='x' && p.botonCinco.textContent =='x' && p.botonTres.textContent =='x'){
				p.ganador.textContent = 'ganador: jugandor 1';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else{
				if (p.contador == 9){ /*verifica si todas las celdas estan ocupadas*/
					p.reiniciar.className = 'd-block mx-auto mt-4 w-25';	
					p.ganador.textContent = 'ganador: empate';
				}else{
					p.verificador = 2; /*indica que es turno del jugador 2*/
				}
				
			}

		}else if(p.verificador == 2 && e.target.textContent == ""){ /*verifica la celda esta vacia*/
			e.target.textContent = 'o'; /*escribe una "o"*/
			p.contador++
			//Posibilidades jugardor 2
			if(p.botonUno.textContent =='o' && p.botonDos.textContent =='o' && p.botonTres.textContent =='o'){
				p.ganador.textContent = 'ganador: jugandor 2'; /*mensaje de ganador*/
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25'; /*revela el boton de volver a jugar*/
				p.verificador = 0; /*indica que se termino el juego*/
			}else if(p.botonCuatro.textContent =='o' && p.botonCinco.textContent =='o' && p.botonSeis.textContent =='o'){
				p.ganador.textContent = 'ganador: jugandor 2';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonSiete.textContent =='o' && p.botonOcho.textContent =='o' && p.botonNueve.textContent =='o'){
				p.ganador.textContent = 'ganador: jugandor 2';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonUno.textContent =='o' && p.botonCuatro.textContent =='o' && p.botonSiete.textContent =='o'){
				p.ganador.textContent = 'ganador: jugandor 2';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonDos.textContent =='o' && p.botonCinco.textContent =='o' && p.botonOcho.textContent =='o'){
				p.ganador.textContent = 'ganador: jugandor 2';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonTres.textContent =='o' && p.botonSeis.textContent =='o' && p.botonNueve.textContent =='o'){
				p.ganador.textContent = 'ganador: jugandor 2';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonUno.textContent =='o' && p.botonCinco.textContent =='o' && p.botonNueve.textContent =='o'){
				p.ganador.textContent = 'ganador: jugandor 2';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else if(p.botonSiete.textContent =='o' && p.botonCinco.textContent =='o' && p.botonTres.textContent =='o'){
				p.ganador.textContent = 'ganador: jugandor 2';
				p.reiniciar.className = 'd-block mx-auto mt-4 w-25';
				p.verificador = 0;	
			}else{
					if (p.contador == 9){ /*verifica si todas las celdas estan ocupadas*/
						p.reiniciar.className = 'd-block mx-auto mt-4 w-25';	
						p.ganador.textContent = 'ganador: empate';
					}else{
						p.verificador = 1; /*indica que es turno del jugador 1*/
					}
			}
		}else{ 
		}
	}
}

m.inicio(); /*llamada al metodo inicio*/

/*REMPLAZAR textContent POR TEXTCONTENT (ya esta)
  ELIMINAR EL ULTIMO ELSE
*/



