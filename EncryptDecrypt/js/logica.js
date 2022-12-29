
//OCULTA CONTENIDO ETIQUEDA ASIDE
function encriptar() {
    let contenidoAside = document.getElementById('contenidoAside');
    if (contenidoAside.style.display === 'none') {
        contenidoAside.style.display = 'block';
    }else{
        contenidoAside.style.display = 'none'
    }
}