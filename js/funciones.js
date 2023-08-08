/**
 * Hay varios tipos de funciones: tradicional, de flecha, anonima y asincrona
 */
// funcion tradicional sin argumentos
function miNombre(){
    console.log('Mi nombre es: ' + 'Santiago');   
    console.log(`Mi nombre es: ${'Martha'}`);   
    console.log(`Mi nombre es: ${'Mateo'}`);   

}

// llamar la función
miNombre();

// función con argumentos
/**
 * 
 * @param {String} apellido 
 */
function miApellido(apellido){
    console.log(`Mi apellido: ${apellido}`); 
}

miApellido('Mejia');