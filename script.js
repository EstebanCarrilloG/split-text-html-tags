// Espera a que el contenido del DOM se haya cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el elemento que contiene el título de la sección
    const textContainer = document.querySelector("#sectionTitle");
    
    // Obtiene el contenido del título
    const textToSeparate = textContainer.innerHTML;
  
    // Divide el título en palabras utilizando un espacio como separador
    textContainer.innerHTML = textToSeparate.split(" ")
      .map((e) => {
        // Crea un contenedor div para cada palabra
        const wordContainer = document.createElement("div");
        wordContainer.classList.add("word-container");
  
        // Divide la palabra en caracteres individuales
        const word = e.split("").map((e) => {
          // Crea un elemento span para cada carácter
          const character = document.createElement("span");
          character.classList.add("character");
          character.innerHTML = e;
  
          // Devuelve el código HTML del carácter
          return character.outerHTML.toString();
        });
  
        // Llena el contenedor de palabra con los caracteres
        wordContainer.innerHTML = word.join("");
  
        // Devuelve el código HTML del contenedor de palabra
        return wordContainer.outerHTML.toString();
      })
      // Combina todas las palabras fragmentadas para reconstruir el título
      .join(" ");
  });