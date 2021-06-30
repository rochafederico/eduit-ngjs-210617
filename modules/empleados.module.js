angular
  .module("empleados", [])
  .controller("empleadosController", function($scope) {
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
  });
