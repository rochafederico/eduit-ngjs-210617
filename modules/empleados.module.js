angular
  .module("empleados", [])
  .controller("empleadosController", function($scope, $filter) {
    $scope.empleados = [
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
      var yaExisteEmpleado = $filter("yaExisteEmpleado");
      if ($scope.nuevoEmpleado.$valid && !yaExisteEmpleado($scope.empelado, $scope.empleados)) {
        $scope.empleados.push(angular.copy($scope.empelado));
        $scope.empelado = {
          nombre: "",
          apellido: "",
          estaCoucheado: false,
        };
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
