const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
// const argv = require('yargs').argv;
const colors = require('colors');


console.clear();

// const base = 4;

// const [ , , arg3 = 'base=5' ] = process.argv; 
// console.log(process.argv);
// console.log(arg3);

// const [ , base = 5] = arg3.split('=');
// console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
  .then( nombreArchivo => console.log(nombreArchivo.red, 'creado!') )
  .catch( err => console.log(err) );

// console.log( process.argv );
// console.log( argv );
// console.log('base: yargs: ', argv.base);
