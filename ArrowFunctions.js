/*let laMitad = numero => numero / 2;
console.log(laMitad(8));*/

/*let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(20, 4));*/

/*let tengoQueTrabajar = dia => {
    if (dia == "Sábado" || dia == "Domingo"){
        return "No tienes que trabajar";
    }else{
        return ("Vete a trabajar");
    }
}
console.log(tengoQueTrabajar("Domingo"));*/
//****ArrowFunctions
function dameCinco() {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
  return "Mi nombre es Hernán";
}
//aquí se puede colocar un console.log para probar las funciones y abajo hacer otro para probar las ArrowFunctions
let dameCinco = () => [1,2,3,4,5];
let multiplicarPorDos = () => 123 * 2;
let mostrarNombre = () => "Mi nombre es Hernán";