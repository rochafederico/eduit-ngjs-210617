angular
  .module("laboratorio", ["usuariosEduIt", "eduitUi"])
  .controller("loginController", function($scope, usuariosSrv) {
    $scope.cargando = false;
    $scope.ingresar = function() {
      $scope.cargando = true;
      usuariosSrv
        .ingresar($scope.usuario, $scope.clave)
        .then(function(data) {
            debugger
          if (data.valido) {
            location.href = "/Laboratorio/pages/emepleados.html";
          } else {
            $scope.mensaje = data.mensaje;
          }
        })
        .catch(function(err) {
          $scope.mensaje = err.mensaje;
        })
        .finally(function() {
          $scope.cargando = false;
        });
    };
  });
