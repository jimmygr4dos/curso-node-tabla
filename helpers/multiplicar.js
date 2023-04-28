const fs = require('fs');
const colors = require('colors');

// const crearArchivo = ( base = 5 ) => {
//   let salida = '';

//   for (let i = 1; i <= 10; i++) {
//     salida += `${base} x ${ i } = ${ base * i}\n`;
//   }

//   console.log( salida );

//   // fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
//   //   if (err) throw err;

//   //   console.log(`tabla-${ base }.txt creado!`)
//   // });

//   fs.writeFileSync( `tabla-${ base }.txt`, salida);
//   console.log(`tabla-${ base }.txt creado!`);
// }

// const crearArchivo = ( base = 5 ) => {
//   return new Promise ( (resolve, reject) => {
//     let salida = '';  
//     for (let i = 1; i <= 10; i++) {
//       salida += `${base} x ${ i } = ${ base * i}\n`;
//     }
//     console.log( salida );
//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     resolve(`tabla-${base}.txt`);
//   })
// }

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
  try {    
    let consola, salida = '';
    // for (let i = 1; i <= 10; i++) {
    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${ 'x'.green } ${ i } ${ '='.green } ${ base * i}\n`;
      salida += `${base} x ${ i } = ${ base * i}\n`;
    }

    if (listar) {
      console.log( consola );
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearArchivo: crearArchivo
}