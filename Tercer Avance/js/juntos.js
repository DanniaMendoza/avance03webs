
function calcularGeneracion() {
    let generacion, tipogeneracion, edad;

    generacion = document.formulario3.anio.value;

    edad = 2021 - parseInt(generacion)

    if (generacion >= 1920 & generacion <= 1945) {
        tipogeneracion = "Silenciosa";
        imagen.src = "../imagenes/gensilen.jpg";
    }
    else if (generacion >= 1946 & generacion <= 1964) {
        tipogeneracion = "Baby Boomer";
        imagen.src = "../imagenes/genbaby.jpg";
    }
    else if (generacion >= 1965 & generacion <= 1979) {
        tipogeneracion = "Generación X";
        imagen.src = "../imagenes/generanx.jpg";
    }
    else if (generacion >= 1980 & generacion <= 2000) {
        tipogeneracion = "Generación Y";
        imagen.src = "../imagenes/generaciony.jpg";
    }
    else if (generacion >= 2001 & generacion <= 2010) {
        tipogeneracion = "Generación Z";
        imagen.src = "../imagenes/generacionz.jpg";
    }
    else if (generacion >= 2011 & generacion <= 2021) {
        tipogeneracion = "Generación ALFA";
        imagen.src = "../imagenes/genealfa.jpg";
    } else {
        alert('Año incorrecto..!!')
        edad = "ERROR";
        tipogeneracion = "ERROR";
        imagen.src = "../imagenes/error.jpg";
    }
    document.formulario3.respuesta.value = edad;
    document.formulario3.tipo.value = tipogeneracion;
}
