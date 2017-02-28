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
    });