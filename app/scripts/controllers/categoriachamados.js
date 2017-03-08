'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:CategoriachamadosCtrl
 * @description
 * # CategoriachamadosCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('CategoriachamadosCtrl', function ($scope, $firebaseArray) {
    var chamadoAberto = [];
   	var chamadoFechado = [];
    var chamadoDenunciado = [];

   	window.login_screen = window.pleaseWait({
   		logo: 'images/download.gif',
   		backgroundColor: '#e0f2f1',
        loadingHtml: "<p class='loading-message'>Carregando dados, aguarde...</p>"
   	});

   	var ref = firebase.database().ref('chamados');
   	$scope.chamados = $firebaseArray(ref);
   	var todosChamados =$scope.chamados;

	todosChamados.$loaded().then(function(data){

   		window.login_screen.finish();

   		// funcao que vai imprimir na tela os elementos do forEach
   		function logArrayElements(element, index, array){
   			console.log("chamado[" + index + "] = " + element.tipo);
   			if (element.tipo == 'aberto'){
				chamadoAberto.push(element.tipo);
   			}
			else if (element.tipo == 'fechado'){
				chamadoFechado.push(element.tipo);
			 } else if (element.tipo == 'denunciado'){
        chamadoDenunciado.push(element.tipo);
       }

   		};

   		data.forEach(logArrayElements);
   		console.log(chamadoFechado.length, chamadoAberto.length);
		$scope.chamadosAbertos = chamadoAberto.length;
	  	$scope.chamadosSolucionados = chamadoFechado.length;
      $scope.chamadosDenunciados = chamadoDenunciado.length;
	  	$scope.chamadosTotal = $scope.chamadosAbertos + $scope.chamadosSolucionados;
   	});     	
  });
