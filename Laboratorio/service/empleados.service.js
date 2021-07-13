angular
  .module("laboratorio")
  .constant("urlApiEmpleado", "http://edu-it-empleado.glitch.me")
  .service("empleadosService", [
    "$http",
    "urlApiEmpleado",
    function($http, urlApiEmpleado) {
      return {
        getAll: function() {
          return $http.get(urlApiEmpleado).then(function(data) {
            return data.data;
          });
        },
        add: function(empleado) {
          return $http.post(urlApiEmpleado, empleado).then(function(data) {
            return data.data;
          });
        }
      };
    }
  ]);
