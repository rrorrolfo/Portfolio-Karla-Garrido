const teatro = document.querySelector("#menu_teatro");
const boton = document.getElementsByClassName("boton_teatro");
const trayectoria = document.querySelector("#trayectoria_teatro");
const trayectoria_cine = document.querySelector("#trayectoria_cine");
const trayectoria_television = document.querySelector("#trayectoria_television");



boton[0].addEventListener('click', () => {    
                       if (trayectoria.style.display == 'none') {
                boton[0].textContent = 'Esconder trayectoria en teatro';
            trayectoria.style.display = 'block';
  } else {
    boton[0].textContent = 'Mostrar trayectoria en teatro';
  trayectoria.style.display = 'none';
}
 });

boton[1].addEventListener("click", () => {    
                
                       if (trayectoria_cine.style.display == "none") {
  boton[1].textContent = "Esconder trayectoria en cine";
  trayectoria_cine.style.display = "block";
} else {
  boton[1].textContent = 'Mostrar trayectoria en cine';
  trayectoria_cine.style.display = 'none'; 
}

 });

boton[2].addEventListener("click", () => {    
                
                       if (trayectoria_television.style.display == "none") {
  boton[2].textContent = "Esconder trayectoria en televisión";
  trayectoria_television.style.display = "block";
} else {
  boton[2].textContent = 'Mostrar trayectoria en television';
  trayectoria_television.style.display = 'none'; 
}

 });


