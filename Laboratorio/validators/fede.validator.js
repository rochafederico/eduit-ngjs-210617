angular.module("laboratorio").directive("fedeValidator", [
  function() {
    return {
      restrict: "A",
      require: "ngModel",
      scope: {
        ngModel: "="
      },
      link: function(scope, element, attrs, ctrl, transclude) {
        ctrl.$parsers.push(function(valor) {
          ctrl.$setValidity("esFede", valor == "Fede");
          console.dir(ctrl);
          return valor;
        });
      }
    };
  }
]);
