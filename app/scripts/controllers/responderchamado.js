'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ResponderchamadoCtrl
 * @description
 * # ResponderchamadoCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ResponderchamadoCtrl', function ($scope, ResponderChamado, $firebaseObject, $location) {
    console.log(ResponderChamado.chamado);
    var ref = firebase.database().ref('chamados').child(ResponderChamado.chamado);
    $scope.chamado = $firebaseObject(ref);
    console.log($scope.chamado);

    $scope.enviarResposta = function(resposta){
    	firebase.database().ref('chamados').child(ResponderChamado.chamado).update({
    		resposta_prefeitura: resposta
    	}, function(error){
    		if (error){
    			console.log(error);
    		} else {
    			Materialize.toast('Resposta enviada com sucesso, se desejar finalizar o chamado, clique na opção de finalizar no chamado', 7000);
    			$location.path('/dashboard');
    		}
    	});
    };
  });
