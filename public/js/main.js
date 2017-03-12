angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.when('/fotos/edit/:fotoId', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.when('/produtos', {
        templateUrl: 'partials/produtos.html',
        controller: 'ProdutosController'
    });

    $routeProvider.otherwise({
        redirectTo: '/fotos'
    });
});