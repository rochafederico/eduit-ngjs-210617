angular
  .module("empleadosApp")
  .controller("empleadosController", function($scope, empleadosService) {
    empleadosService.getAll().then(function(data) {
      $scope.empleados = data;
    });
  });
