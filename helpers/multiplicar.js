const fs = require('fs');
const colors = require('colors');


const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    try {
        let salida = '';
        let nombreArchivo = `tabla-${ base }.txt`;

        for (let i = 1; i <= hasta; i++) {
            salida += ` ${ base } x ${ i } = ${ base * i }\n`;
        } 

        if(listar) {
            console.log(`====================================`.underline.red);
            console.log('TABLA DEL: ', colors.blue(base));
            console.log(`====================================`.underline.red);
            console.log(salida.america);
        }
    
        fs.writeFileSync(`./salida/${ nombreArchivo }`, salida);
    
        //console.log(`tabla-${ base }.txt creado`);
    
        return nombreArchivo;

    } catch(err) {
       throw err;
    }
}


module.exports = {
    crearArchivo
}