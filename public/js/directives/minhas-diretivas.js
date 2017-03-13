angular.module('minhasDiretivas', [])
    .directive('meuPainel', function() {
        var ddo = {};

        ddo.restrict = "AE";
        ddo.transclude = true;

        ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
    })
    .directive('minhaFoto', function() {
        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';           

        return ddo;
    })
    .directive('meuBotaoPerigo', function() {
        var ddo = {}

        ddo.restrict = "E";

        ddo.scope = {
            nome: '@',
            acao: '&'
        };

        ddo.template = '<button class="btn btn-danger btn-block btn-xs" ng-click="acao()">{{nome}}</button>';

        return ddo;
    })
    .directive('meuFocus', function() {
        var ddo = {};

        ddo.restrict = "A";

        ddo.scope = {
            focado: '='
        };

        ddo.link = function(scope, element) {
            scope.$on('fotoCadastrada', function() {
                element[0].focus();
            });
        };

        return ddo;
    }).
    directive('meusTitulos', function() {
        var ddo = {};

        ddo.restrict = 'AE';
        ddo.template = '<ul><li np-repeat="titulo in titulos">{{titulo}}</li><ul>';
        ddo.controller = function($scope, recursoFoto) {
            recursoFoto.query(function(fotos) {
                $scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                });
            });
        };

        return ddo;
    });