angular
  .module("eduitUi")
  .directive("eduitEncabezado", [
    function() {
      return {
        templateUrl: "/Laboratorio/directives/eduit.encabezado.directive.html",
        restrict: "E",
        require: 'theme',
        scope: {
            theme: '@'
        },
        transclude: true
      };
    }
  ]);
  