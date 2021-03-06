'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('DashboardCtrl', function ($scope, $firebaseArray, $route, ResponderChamado, $location) {
   
   	//$route.reload();
   	//firebase.initializeApp(FirebaseConfig);
   	var chamadoAberto = [];
   	var chamadoFechado = [];
    var chamadoDenunciado = [];

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
			} else if (element.tipo == 'denunciado'){
        chamadoDenunciado.push(element.tipo);
      }
   		};

   		data.forEach(logArrayElements);
   		console.log(chamadoFechado.length, chamadoAberto.length);
		  $scope.chamadosAbertos = chamadoAberto.length;
      $scope.chamadosDenunciados = chamadoDenunciado.length;
	  	$scope.chamadosSolucionados = chamadoFechado.length;
	  	$scope.chamadosTotal = $scope.chamadosAbertos + $scope.chamadosSolucionados;
   	});  

   	$scope.responder = function(controle_data) {
   		ResponderChamado.chamado = controle_data;
      $location.path('/responderChamado');
   	};

    $scope.finalizar = function(cd) {
      firebase.database().ref('chamados').child(cd).update({
        tipo: 'fechado'
      }, function(error){
        if (error){
          console.log(error);
        } else {
          Materialize.toast('O chamado foi marcado como finalizado e já pode ser visto na área de chamados finalizados', 7000);
        }
      });
    };

    $scope.apagar = function(cd){
      firebase.database().ref('chamados').child(cd).remove();
      Materialize.toast('O chamado foi permanentemente removido do banco de dados', 4000);
    };
  });
