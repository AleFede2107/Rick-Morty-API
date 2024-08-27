const divide = (a,b) => {
  if (b == 0){
    throw new Error('Division entre cero no es posible')
  }
  return a/b
}

try {
  //AQUI CORRE TODO LO BUENO
  console.log('Resultado', divide(10,0))
} catch (error) {
  //AQUI CAEN LOS ERRORES
  console.log(error)
  console.log('OCURRIO UN ERROR EN DIVIDIENDO')
}finally{
  //PASE LO QUE PASE SIEMPRE SE EJECUTA
  console.log('PASE LO QUE PASE ESTO CORRE')
}