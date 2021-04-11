//EJERCICIOS FUNCIONES

//1.SUMAR
function sumar (x1, x2){
    return (x1+x2);
}
sumar(2, 3);
sumar(1.2, 3.4);
sumar(3, -5);

//2.RESTAR
function restar (item1,item2) {
    return (item1-item2);
  }
restar(3, 2);
restar(10, 5.5);
restar(3, 5);

//3.MULTIPLICAR
function multiplicar(x1,x2){
    return (x1*x2);
  }
multiplicar(2, 3);
multiplicar(4, 0.5);

//4.DIVIDIR
function dividir(x1,x2){
    return (x1/x2);
  }
dividir(2, 3)
dividir(1.2, 3.4)
dividir(3, -5) 

//5.Calcular área triángulo
function calcularAreaTriangulo (x1,x2){
    return((x1*x2)/2)
  }
calcularAreaTriangulo(3, 4)
calcularAreaTriangulo(5, 6)

//6. GRITAR
function gritar (string){
    return (`¡${string}!`)
  }
gritar('hola')
gritar('aaaaaa')

//7.Obtener nombre completo
function obtenerNombreCompleto(nombre,apellido){
    return (`${nombre} ${apellido}`);
  }
obtenerNombreCompleto('Ada', 'Lovelace');

//8.Saludar
function saludar(nombre) {
    return (`Hola ${nombre}, un gusto conocerte`);
  }
saludar('Ada')