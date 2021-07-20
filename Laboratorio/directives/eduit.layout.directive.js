angular
  .module("eduitUi").directive("eduitLayout", [
  function() {
    return {
      templateUrl: "/Laboratorio/directives/eduit.layout.directive.html",
      restrict: "E",
      transclude: true
    };
  }
]);