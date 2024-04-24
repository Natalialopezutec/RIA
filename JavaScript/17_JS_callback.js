//tcp host 
console.log('inicio');

const getUser = (callbackFun) => {
    const request =new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=> {
        if (request.readyState === 4 && request.status === 200){
            const data  = JSON.parse(request.responseText);
        }
        else if (request.readyState === 4) {
            callbackFun('No se puede realizar la peticion');
        }

    })

    const url = "https://reqres.in/api/users/";
    request.open('GET', url);
    request.send();

}

getUser((err, data) => {
    if(err) {
        console.log(err);
    }else {
        console.log(data.data);
    }
});

console.log('finalizado!');