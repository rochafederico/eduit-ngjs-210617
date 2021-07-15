angular
  .module("empleadosApp")
  .controller("empleadosFormController", function(
    $scope,
    empleadosService,
    territoriosService
  ) {
    $scope.paises = territoriosService.obtenerPaises();
    $scope.opcionsCouch = [
      { label: "Todos", valor: "" },
      { label: "Si", valor: true },
      { label: "No", valor: false },
    ];
    $scope.cambiarProp = function(prop) {
      if ($scope.propOrden != prop) {
        $scope.propOrden = prop;
        $scope.reverseOrden = false;
      } else {
        $scope.reverseOrden = !$scope.reverseOrden;
      }
    };
    $scope.agregarEmpleado = function() {
      if ($scope.nuevoEmpleado.$valid) {
        empleadosService
          .add(angular.copy($scope.empleado))
          .then(function(data) {
            debugger;
          });
      }
    };
    $scope.patronMail = "[a-z]{1,}[@][a-z]{1,}[.]{1,1}[a-z]{2,}";
    $scope.cambioPais = function() {
      if ($scope.empleado.pais) {
        $scope.provincias = territoriosService.obtenerProvincias(
          $scope.empleado.pais
        );
      } else {
        $scope.provincias = [];
      }
      $scope.empleado.provincia = "";
      $scope.empleado.ciudad = "";
      $scope.ciudades = [];
    };

    $scope.$watch("empleado.provincia", function(newValue, current) {
      if (newValue) {
        $scope.ciudades = territoriosService.obtenerCiudades(newValue);
      } else {
        $scope.ciudades = [];
      }
      $scope.empleado.ciudad = "";
    });
  });
