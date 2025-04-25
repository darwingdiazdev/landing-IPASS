// funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada 
const seleccionar = (link) => {
    const opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className= "";
    opciones[4].className= "";
    opciones[5].className="";
    link.className = "seleccionado";

    // hacemos desaperecer el menu una vez que se ha selecionado una opcion en el modo responsivo 
    const x = document.getElementById("nav");
    x.className="";
}

//funcion que muestra el menu responsive
const responsiveMenu = () => {
    const x = document.getElementById("nav");
    if(x.className===""){
        x.className= "responsive";
    }else{
        x.className = "";
    }
}

// detecto el scrolling para aplicar la animacion de las barras de habilidades 
window.onscroll = function(){
    efectoHabilidades()
}

// funcio que aplicala aimacion de la barra de habilidades 

const efectoHabilidades = () => {
    const skills = document.getElementById("skills");
    const distancia_skills  = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1")
        document.getElementById("js").classList.add("barra-progreso2")
        document.getElementById("bd").classList.add("barra-progreso3")
        document.getElementById("bs").classList.add("barra-progreso4")
        document.getElementById("css").classList.add("barra-progreso5")
        document.getElementById("react").classList.add("barra-progreso6")
        document.getElementById("github").classList.add("barra-progreso7")
        document.getElementById("express").classList.add("barra-progreso8")
        document.getElementById("scrum").classList.add("barra-progreso9")
        
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const textArray = [
      "Convivir MEJOR",
      "Administrar MENOS",
      "Automatizar TODO",
      "Y por supuesto AHORRAR",

    ];
  
    let currentTextIndex = 0;
    const dynamicTextElement = document.getElementById("dynamic-text");
  
    function changeText() {
      let text = textArray[currentTextIndex];
      
      // Dividir el texto en palabras
      let words = text.split(" ");
      
      // La última palabra la envuelvo en un <span> con la clase "highlight" para hacerla morada
      let lastWord = words.pop(); // Remuevo la última palabra
      let highlightedText = words.join(" ") + " <span class='purple'>" + lastWord + "</span>";
  
      // Asigno el texto a la etiqueta h2
      dynamicTextElement.innerHTML = highlightedText;
  
      // Incrementar el índice para el siguiente texto
      currentTextIndex = (currentTextIndex + 1) % textArray.length;
  
      // Si el índice alcanza el tamaño del array, reiniciar para mostrar el texto inicial
      if (currentTextIndex === 0) {
        dynamicTextElement.innerHTML = "<span class='purple'>Agentes en</span> Inteligencia Artificial <span class='purple'> con sistemas para</span> gestión <span class='purple'>de edificios</span> y residenciales</span>";
      }
    }
  
    setInterval(changeText, 3000); // Cambia el texto cada 3 segundos
});

document.addEventListener("DOMContentLoaded", function() {
    const textArray = [
      "Notifica a residentes, en tiempo real, del arribo de visitas e invitados.",
      "Emite llamadas de atención y genera multas a residentes automáticamente.",
      "Residente gestiona reservas desde celular y automatizadamente",
      "Gestiona códigos de acceso para invitados y visitantes de residentes",
      "Interactúa directamente con el dispositivo celular de los residentes",
      "Declara estado de residentes en mora y al día con estados de cuenta e indicadores",
      "Reduce la microgerencia y cambia el modelo hacia una administración inteligente",
      "Envía mensajes colectivos, selectivos e individuales, a residentes, en segundos",
      "Mide el cumplimiento de proveedores en planes de seguridad, limpieza y mantenimiento",
      "Permite al residente apagar o encender delegados, trabajadores e invitados",
      "Convierte en ticket las solicitudes y reportes de residentes",
      "Recibe, procesa y concilia los acreditamientos por cuotas de mantenimiento",
      "Consultas de estados de cuenta en tiempo real desde el celular",
      "Incorpora Agentes basados en modelos de Inteligencia Artificial",
    ];
  
    let currentTextIndex = 0;
    const dynamicTextElement = document.getElementById("dynamic-text-two");
  
    function changeText() {
      let text = textArray[currentTextIndex];
      
      // Dividir el texto en palabras
      let words = text.split(" ");
      
      // La última palabra la envuelvo en un <span> con la clase "highlight" para hacerla morada
      let lastWord = words.pop(); // Remuevo la última palabra
      let highlightedText = words.join(" ") + " <span class='highlight'>" + lastWord + "</span>";
  
      // Asigno el texto a la etiqueta h2
      dynamicTextElement.innerHTML = highlightedText;
  
      // Incrementar el índice para el siguiente texto
      currentTextIndex = (currentTextIndex + 1) % textArray.length;
    }
  
    setInterval(changeText, 3000); // Cambia el texto cada 5 segundos
});

