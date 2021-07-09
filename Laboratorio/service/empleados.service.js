angular.module("laboratorio").service("empleadosService", [
  "$http", "$q",
  function($filter, $q) {
    var listadoEmpleados = [
      { nombre: "Eze", apellido: "López", estaCoucheado: false },
      { nombre: "Gonza", apellido: "Garcia", estaCoucheado: true },
      { nombre: "Kevin", apellido: "Rios", estaCoucheado: false },
      { nombre: "Lau", apellido: "Navoni", estaCoucheado: true },
      { nombre: "Gonza2", apellido: "Garcia", estaCoucheado: true },
      { nombre: "Kevin2", apellido: "Rios", estaCoucheado: false },
      { nombre: "Lau2", apellido: "Navoni", estaCoucheado: true },
      { nombre: "Gonza3", apellido: "Garcia", estaCoucheado: true },
      { nombre: "Kevin3", apellido: "Rios", estaCoucheado: false },
      { nombre: "Lau3", apellido: "Navoni", estaCoucheado: true },
    ];
    return {
      getAll: function() {
        return listadoEmpleados;
      },
      add: function(empleado) {
        return $q(function(resolve, reject) {
          var yaExisteEmpleado = $filter("yaExisteEmpleado");
          if (!yaExisteEmpleado(empelado, $listadoEmpleados)) {
            listadoEmpleados.push(empleado);
            resolve(listadoEmpleados);
          } else {
            reject("Empleado ya existe");
          }
        });
      },
    };
  },
]);
