angular.module("laboratorio").filter("yaExisteEmpleado", function() {
  return function(empleadoActual, lista) {
    var resultado = false;
    for (let i = 0; i < lista.length; i++) {
      const empleado = lista[i];
      if (
        empleado.nombre == empleadoActual.nombre &&
        empleado.apellido == empleadoActual.apellido
      ) {
        resultado = true;
        break;
      }
    }
    return resultado;
  };
});
