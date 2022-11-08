
    //funcion de aleatoridas necesita dos valores la muestra y la poblacion
    function aleatorio(muestra, poblacion ) {
        console.log("inicio del ciclo")
        //variable donde se guardan los datos aleatorios elegidos
        var Resultado = [];
        //ciclo for
        for (let i = 1; i < muestra + 1; i++) {
            //declaramos variable
            let elegido = 0
            //la variable elegido es igual a un numero aleatorio
            elegido = (Math.random() * poblacion).toFixed()
            //comprobamos si el dato no se repite
            if(Resultado.includes(elegido) == false){
                //no se repite el valor
                //agregamos el valor a Resultado
                Resultado.push(elegido)
            }else{
                //repetimos el cliclo una vez
                elegido = (Math.random() * poblacion).toFixed()

                if(Resultado.includes(elegido) == false){
                 //no se repite el valor
                 //agregamos el valor a Resultado
                 Resultado.push(elegido)
                }else{
                 //repetimos el cliclo otra vez
                 elegido = (Math.random() * poblacion).toFixed()
                
                 if(Resultado.includes(elegido) == false){
                  //no se repite el valor
                  //agregamos el valor a Resultado
                  Resultado.push(elegido)
                 }
                }
            }
        }
        console.log("Termino el cliclo") //informamos que el ciclo termino
        //termino el ciclo
        //comprobamos si no se repitio ningun resultado
        if(Resultado.length < muestra){
            //se repitieron valores volvemos a empezar
            aleatorio(muestra, poblacion)
        }
        //mostramos en la consola en resultado
        return Resultado
    }
    
