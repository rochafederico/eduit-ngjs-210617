angular
  .module("eduitUi").directive("eduitInput", [
  function() {
    return {
      templateUrl: "/Laboratorio/directives/eduit.input.directive.html",
      restrict: "E",
      require: "ngModel,type",
      scope: {
        ngModel: "=",
        type: "@",
        id: "@",
        label: "@",
        items: "=",
        ngChange: "=",
        disabled: "="
      }
    };
  }
]);
