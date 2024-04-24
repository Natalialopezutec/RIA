
//es.javascript.info
//event loop (mdn)
//ajax librosweb.es

const miPromesa = (recurso) => {
    return new Promise((revove, reject) => {
        if (recurso > 1000){
            resolve ('recurso valido');
        }else{
            reject('número no valido');
        }
    })
}

miPromesa(500)
    .then (data => console.log(data))
    .catch (error => console.log(error))
