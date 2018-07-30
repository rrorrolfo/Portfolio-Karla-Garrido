const boton = document.getElementsByClassName("boton_teatro");
const trayectoria = document.querySelector("#trayectoria_teatro");
const trayectoria_cine = document.querySelector("#trayectoria_cine");
const trayectoria_television = document.querySelector("#trayectoria_television");
const menu = document.querySelector("#menu");
const mobile_nav = document.querySelector(".nav-container");

menu.addEventListener("click", () => {

  if(mobile_nav.style.display == "none" || mobile_nav.style.display == "") {
  mobile_nav.style.display = "block";
  } else {
    mobile_nav.style.display = "none";
  }
});

boton[0].addEventListener('click', (event) => {
   
  if (trayectoria.style.display == 'none' || trayectoria.style.display == '') {
    trayectoria.style.display = 'block';
    boton[0].textContent = 'Esconder trayectoria en teatro';
            
  } else {
    boton[0].textContent = 'Mostrar trayectoria en teatro';
    trayectoria.style.display = 'none';
  }
});

boton[1].addEventListener("click", () => {    
                
  if (trayectoria_cine.style.display == "none" || trayectoria_cine.style.display == '') {
    boton[1].textContent = "Esconder trayectoria en cine";
    trayectoria_cine.style.display = "block";
  } else {
    boton[1].textContent = 'Mostrar trayectoria en cine';
    trayectoria_cine.style.display = 'none'; 
  }
});

boton[2].addEventListener("click", () => {    
                
  if (trayectoria_television.style.display == "none" || trayectoria_television.style.display == '') {
  boton[2].textContent = "Esconder trayectoria en televisión";
  trayectoria_television.style.display = "block";
  } else {
  boton[2].textContent = 'Mostrar trayectoria en television';
  trayectoria_television.style.display = 'none'; 
  }
});


