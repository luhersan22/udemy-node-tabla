
const { crearArchivo } = require('./helpers/multiplicar');
require('colors'); //si no se va a usar la constante
const argv = require('./config/yargs');



console.clear();


//console.log(process.argv);
console.log(argv);



// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);


crearArchivo( argv.base, argv.listar, argv.hasta )
    .then(nombreArchivo => console.log(`${ nombreArchivo.rainbow } creado`))
    .catch(err => console.log(err));




//process.argv (permite extrer valores desde la consola)
//Instalar dependencias locales para desarrollo eje
//npm install nodemon --save-dev