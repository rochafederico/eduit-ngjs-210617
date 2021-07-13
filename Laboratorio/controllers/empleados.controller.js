angular
  .module("laboratorio")
  .controller("empleadosController", function($scope, empleadosService) {
    empleadosService.getAll().then(function(data) {
      $scope.empleados = data;
    });
  });
