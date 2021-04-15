// //EJERCICIOS FUNCIONES

// //1.SUMAR
// function sumar(x1, x2) {
//     return (x1 + x2);
// }
// sumar(2, 3);
// sumar(1.2, 3.4);
// sumar(3, -5);

// //2.RESTAR
// function restar(item1, item2) {
//     return (item1 - item2);
// }
// restar(3, 2);
// restar(10, 5.5);
// restar(3, 5);

// //3.MULTIPLICAR
// function multiplicar(x1, x2) {
//     return (x1 * x2);
// }
// multiplicar(2, 3);
// multiplicar(4, 0.5);

// //4.DIVIDIR
// function dividir(x1, x2) {
//     return (x1 / x2);
// }
// dividir(2, 3)
// dividir(1.2, 3.4)
// dividir(3, -5)

// //5.Calcular área triángulo
// function calcularAreaTriangulo(x1, x2) {
//     return ((x1 * x2) / 2)
// }
// calcularAreaTriangulo(3, 4)
// calcularAreaTriangulo(5, 6)

// //6. GRITAR
// function gritar(string) {
//     return (`¡${string}!`)
// }
// gritar('hola')
// gritar('aaaaaa')

// //7.Obtener nombre completo
// function obtenerNombreCompleto(nombre, apellido) {
//     return (`${nombre} ${apellido}`);
// }
// obtenerNombreCompleto('Ada', 'Lovelace');

// //8.Saludar
// function saludar(nombre) {
//     return (`Hola ${nombre}, un gusto conocerte`);
// }
// saludar('Ada')
// //9. Saludar gritando
// const saludarGritando = (nombre, apellido) => {
//     return gritar(saludar(obtenerNombreCompleto(nombre, apellido)));
// }

// //10.Obtener datos de ciudad
// function obtenerDatosDeCiudad(nombre, poblacion, pais) {
//     return (`La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`);
// }
// obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina')

// //11.Convertir horas en segundos
// function convertirHorasEnSegundos(hora) {
//     return (hora * 3600)
// }
// convertirHorasEnSegundos(1)
// convertirHorasEnSegundos(3)
// convertirHorasEnSegundos(4.5)
// //12.Calcular perímetro rectángulo
// function calcularPerimetroRectangulo(base, altura) {
//     return (2 * (base + altura));
// }
// calcularPerimetroRectangulo(3.2, 5)
// calcularPerimetroRectangulo(10, 20)

// //13.Calcular porcentaje
// function calcularPorcentaje(numero, porcentaje) {
//     return (numero * (porcentaje / 100));
// }
// calcularPorcentaje(100, 15)
// calcularPorcentaje(10, 50)
// calcularPorcentaje(200, 10)

// //14.Sumar porcentaje
// const sumarPorcentaje = (numero, porcentaje) => {
//     return numero + calcularPorcentaje(numero, porcentaje)
// }

// //15. Restar porcentaje
// const restarPorcentaje = (numero, porcentaje) => {
//     return numero - calcularPorcentaje(numero, porcentaje)
// }

// //16.Calcular FPS
// function calcularFPS(cuadros, minutos) {
//     return (cuadros * (minutos * 60));
// }
// calcularFPS(1, 1)
// calcularFPS(10, 2)
// calcularFPS(2, 3)

// //17.Obtener competencia
// function obtenerCompetencia(competencia1, competencia2) {
//     return (`${competencia1} vs. ${competencia2}`);
// }
// obtenerCompetencia('JavaScript', 'Python')
// obtenerCompetencia('Coca', 'Pepsi')
// obtenerCompetencia('Perros', 'Gatos')

// //18.Generar email
// function generarEmail(usuario, dominio) {
//     return (`${usuario}@${dominio}.com`)
// }
// generarEmail('adalovelace', 'gmail')

// //19.Calcular puntaje
// function calcularPuntaje(facil, normal, dificil) {
//     return ((facil * 3) + (normal * 5) + (dificil * 10));
// }
// calcularPuntaje(3, 0, 0)

// calcularPuntaje(0, 2, 1)

// calcularPuntaje(5, 1, 2)