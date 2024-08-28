/* Promise()
//Variables de estados
pending INICIAL
fulfilled Operacion exitosa
rejected Operacion fallida */

//Tipos de callbacks
/* resolve Operacion exitosa
reject Operacion Fallida
finally Se ejecuta pase lo que pase */

// Metodos de una promesa
/* .then cuando la Operacion es exitosa
.catch() Operacion Fallida */

const myPromise = new Promise((resolve, reject) => {

  setTimeout(() => {
    let operationSucces = false;
    if(operationSucces){
      resolve('Operacion exitosa')
    } else {
      reject('Operacion Fallida')
    }


  }, 3000);  

})

console.log(myPromise);

myPromise.then((message) => {
  console.log(message)
}).catch((error) => {
  console.log(error)
})