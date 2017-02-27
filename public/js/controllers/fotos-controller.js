angular.module('alurapic').controller('FotosController', function ($scope, $http) {

    $scope.fotos = [];

    $http.get('/v1/fotos').success(function (retorno) {
        console.log(retorno);
        $scope.fotos = retorno;
    }).error(function (erro) {
        console.log(erro);
    });
});