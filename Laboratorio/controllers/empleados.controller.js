angular
  .module("laboratorio")
  .controller("empleadosController", function($scope, $filter, empleadosService) {

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
        empleadosService.add(angular.copy($scope.empelado)).then(function(data){
            debugger
        });
      }
    };
    $scope.patronMail = "[a-z]{1,}[@][a-z]{1,}[.]{1,1}[a-z]{2,}";
    $scope.cambioPais = function(){
      if($scope.empelado.pais) {
        $scope.provincias= ["Chubut", "Buenos Aires", "Cordoba", "Misiones"];
      } else {
        $scope.provincias= [];
      }
      $scope.empelado.provincia = '';
      $scope.empelado.ciudad = '';
    }

    $scope.$watch('empelado.provincia', function(newValue, current) {
      if(newValue) {
          $scope.ciudades= ["Bagota", "Buenos Aires", "Caracas", "Puerto Madryn"];
      }
      $scope.empelado.ciudad = '';
    })
    $scope.$watchGroup(['empelado.provincia', 'empelado.ciudad'], function(newValue, current) {
      console.log(newValue, current);
    })
    $scope.$watchCollection($scope.empleados, function(newValue, current) {
      console.log(newValue, current);
    })
  });
