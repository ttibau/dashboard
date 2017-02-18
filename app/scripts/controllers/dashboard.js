'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('DashboardCtrl', function ($scope, FirebaseConfig, $firebaseArray, $route) {
   
   	//$route.reload();
   	//firebase.initializeApp(FirebaseConfig);
   	var chamadoAberto = [];
   	var chamadoFechado = [];

   	var ref = firebase.database().ref('chamados');
   	$scope.chamados = $firebaseArray(ref);
   	var todosChamados =$scope.chamados;

   	window.login_screen = window.pleaseWait({
   		logo: 'images/download.gif',
   		backgroundColor: '#e0f2f1',
        loadingHtml: "<p class='loading-message'>Carregando dados, aguarde...</p>"
   	});

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
			}
   		};

   		data.forEach(logArrayElements);
   		console.log(chamadoFechado.length, chamadoAberto.length);
		$scope.chamadosAbertos = chamadoAberto.length;
	  	$scope.chamadosSolucionados = chamadoFechado.length;
	  	$scope.chamadosTotal = $scope.chamadosAbertos + $scope.chamadosSolucionados;
   	});  

   	$scope.responder = function(controle_data) {
   		console.log(controle_data);
   	};

    $scope.finalizar = function(cd) {
      firebase.database().ref('chamados').child(cd).update({
        tipo: 'fechado'
      });
    };

    $scope.apagar = function(cd){
      firebase.database().ref('chamados').child(cd).remove();
    };
  });
