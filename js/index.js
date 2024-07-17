import data from "./data.js";

do {
  let ced = parseInt(prompt("Cédula a consultar:"));
  let dataEstudiante = data.find((est) => est.Cedula === ced);
  if (!dataEstudiante) alert("Estudiante no encontrado");
  else
    alert(`
    Datos del estudiante:
    Cédula: ${dataEstudiante.Cedula}
    Nombres: ${dataEstudiante.Nombres}
    Cond: ${dataEstudiante.Condicion}
    Mat: ${dataEstudiante.Materia}
    Sección: ${dataEstudiante.Seccion}
    Profesor: ${dataEstudiante.Profesor}
    `);
} while (confirm("¿Desea buscar otro estudiante?"));
