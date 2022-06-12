validarArray(5);

function validarArray(array, numero) {

    try{
        if(!array && !numero) throw new ReferenceError("Envie os parâmetros");

        if(typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if(typeof numero !== 'number') throw new TypeError("Numero precisa ser do tipo number");

        if(array.length !== numero) throw new RangeError("Tamanho invalido!");

        return array;
    }

    catch(e){
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.message);
        }else{
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}
