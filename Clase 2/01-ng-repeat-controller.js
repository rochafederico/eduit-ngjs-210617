// creando un modulo
angular.module('miApp').controller('ngRepeatController', function($scope){
    $scope.noticias = [
        { titulo: "Titulo 1", descripcion: "Kjahskfjahsd kjshd ughsi dfug isdfg siufdgh isudfgh isudfhg isudfhg sdfg sd"},
        { titulo: "Titulo 2", descripcion: "Kjahskfjahsd kjshd ughsi dfug isdfg siufdgh isudfgh isudfhg isudfhg sdfg sd"},
        { titulo: "Titulo", descripcion: "Kjahskfjahsd kjshd ughsi dfug isdfg siufdgh isudfgh isudfhg isudfhg sdfg sd"},
        { titulo: "Titulo", descripcion: "Kjahskfjahsd kjshd ughsi dfug isdfg siufdgh isudfgh isudfhg isudfhg sdfg sd"},
        { titulo: "Titulo", descripcion: "Kjahskfjahsd kjshd ughsi dfug isdfg siufdgh isudfgh isudfhg isudfhg sdfg sd"},
        { titulo: "Titulo", descripcion: "Kjahskfjahsd kjshd ughsi dfug isdfg siufdgh isudfgh isudfhg isudfhg sdfg sd"},
        { titulo: "Titulo", descripcion: "Kjahskfjahsd kjshd ughsi dfug isdfg siufdgh isudfgh isudfhg isudfhg sdfg sd"},
        { titulo: "Titulo", descripcion: "Kjahskfjahsd kjshd ughsi dfug isdfg siufdgh isudfgh isudfhg isudfhg sdfg sd"},
        { titulo: "Titulo", descripcion: "Kjahskfjahsd kjshd ughsi dfug isdfg siufdgh isudfgh isudfhg isudfhg sdfg sd"}
    ];

    $scope.borrarNoticia = function(index){
        $scope.noticias.splice(index, 1);
    }
})
