//funcion de muestreo simple  //funciona sin problemas hasta 10 elevadoa a la setima potencia
function ramdom(muestra, poblacion) {
    lista = []     //creamos un objecto con los posibles 
    resultado = [] //creamos un objecto con los resultados aleatorios

    //rellenamos la lista 
    for (let index = 0; index < poblacion + 1; index++) {
        lista.push("" + index) //creamos el posible resultado
    }

    for (let i = 0; i < muestra; i++) {
        Raleatorio = parseInt(Math.random() * lista.length) //creamos una variable aletoria basada en los posibles resultados
        lista.pop(Raleatorio)       //quitamos Raleatorio de la lista de posibles resultados
        resultado.push(Raleatorio)  //agregamos el Raleatorio a resultado       
    }

    return resultado
}
