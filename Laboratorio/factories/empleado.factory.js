angular
  .module("laboratorio")
  .factory("empleadoDTO", [
    function() {
      return function(nombre, apellido, codCiudad, estaCoucheado) {
        return {
          nombre: nombre,
          apellido: apellido,
          codCiudad: codCiudad,
          estaCoucheado: estaCoucheado
        };
      };
    }
  ]);
