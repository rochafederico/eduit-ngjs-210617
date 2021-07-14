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
        getById: function(id) {
          return $http.get(urlApiEmpleado + "/" + id).then(function(data) {
            return data.data;
          });
        },
        add: function(empleado) {
          return $http.post(urlApiEmpleado, empleado).then(function(data) {
            return data.data;
          });
        },
        edit: function(empleado) {
          return $http
            .put(urlApiEmpleado + "/" + empleado.id, empleado)
            .then(function(data) {
              return data.data;
            });
        },
        delete: function(id) {
          return $http.delete(urlApiEmpleado + "/" + id).then(function(data) {
            return data.data;
          });
        },
      };
    }
  ]);
