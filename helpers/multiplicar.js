const fs = require("fs")
const color = require("colors")


const crearArchivo = async(numero = 5, l= false, h) =>{

    try {


    let salida, consola = "";

    for (let index = 1; index <= h; index++) {
     
        salida += `${numero} ${"x"} ${index} ${"="} ${numero * index}\n` ;
        consola += `${numero} ${"x".green} ${index} ${"=".green} ${numero * index}\n` ;

        
    }   
   if(l ){
    console.log("===================================".green);
    console.log(`Tabla de ${numero}`.red);
    console.log("===================================".green);
    console.log(consola)

    
   }
    
    fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);

    return `tabla-${numero}.txt`.rainbow;

  
    } catch (error) {
        throw error
    }
 }

 module.exports = {
     crearArchivo
 }