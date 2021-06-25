// angular.module('estilosApp').filter('miFiltro', function($filter) {
//     debugger
//     return function(valor) {
//         debugger
//         var mayuscula = $filter('uppercase');
//         var minuscula = $filter('lowercase');
//         return mayuscula(valor[0]) + minuscula(valor.substr(1,valor.length));
//     }
// })

angular.module('estilosApp').filter('miFiltro', function($filter) {
    return function(valor) {
        return $filter('uppercase')(valor[0]) + $filter('lowercase')(valor.substr(1,valor.length));
    }
})