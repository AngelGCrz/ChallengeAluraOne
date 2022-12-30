
//OCULTA CONTENIDO ETIQUEDA ASIDE
/*function encriptar() {
    let contenidoAside = document.getElementById('contenidoAside');
    if (contenidoAside.style.display === 'none') {
        contenidoAside.style.display = 'block';

    } else {
        contenidoAside.style.display = 'none'
    }
}*/

function encriptar() {
  document.getElementById("contenidoAside").style.visibility = "hidden";
  // Obtener el texto de la caja de texto
  let texto = document.getElementById("textoUsuario").value;

  // Encriptar el texto
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");

  
  // Mostrar el texto encriptado en la caja de texto
  document.getElementById("mostrarTexto").value = texto;
}

function desencriptar() {
  // Obtener el texto de la caja de texto
  let texto = document.getElementById("mostrarTexto").value;

  // Desencriptar el texto
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");

  // Mostrar el texto desencriptado en la caja de texto
  document.getElementById("mostrarTexto").value = texto;
}

function ocultarTextAreaAside() {
  document.getElementById("mostrarTexto").style.visibility = "hidden";
}

//asiganar funciones a los botones
document.getElementById("brtEncriptar").addEventListener("click", encriptar); 
document.getElementById("btnDesencriptar").addEventListener("click", desencriptar);