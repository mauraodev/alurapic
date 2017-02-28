angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html'
    });

    $routeProvider.when('/produtos', {
        templateUrl: 'partials/produtos.html',
        controller: 'ProdutosController'
    });

    $routeProvider.otherwise({
        redirectTo: '/fotos'
    });
});