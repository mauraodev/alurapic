angular.module('alurapic')
    .controller('FotoController', function ($scope, $http, $routeParams) {

        $scope.foto = {};
        $scope.mensagem = '';

        if ($routeParams.fotoId) {
            $http.get('/v1/fotos/' + $routeParams.fotoId)
                .success(function (retorno) {
                    $scope.foto = retorno;
                })
                .error(function (error) {
                    $scope.messagem = 'Não foi possível encontrar a foto';
                });
        }

        $scope.submeter = function () {

            if ($scope.formulario.$valid) {

                if ($routeParams.fotoId) {
                    $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                        .success(function () {
                            $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' foi alterada';
                        })
                        .error(function (erro) {
                            console.log(erro);
                            $scope.mensagem = 'Não foi possível alterar';
                        });

                } else {
                    $http.post('/v1/fotos', $scope.foto)
                        .success(function () {
                            $scope.foto = {};
                            $scope.mensagem = 'Foto cadastrada com sucesso';
                        })
                        .error(function (erro) {
                            console.log(erro);
                            $scope.mensagem = 'Foto cadastrada com sucesso';
                        });
                }

            }

        };

    });