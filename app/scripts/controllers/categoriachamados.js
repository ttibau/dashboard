'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:CategoriachamadosCtrl
 * @description
 * # CategoriachamadosCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('CategoriachamadosCtrl', function ($scope, $firebaseArray, $firebaseObject) {
  	$scope.form = {};
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
   			//console.log("chamado[" + index + "] = " + element.tipo);
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
   		//console.log(chamadoFechado.length, chamadoAberto.length);
		$scope.chamadosAbertos = chamadoAberto.length;
	  	$scope.chamadosSolucionados = chamadoFechado.length;
      	$scope.chamadosDenunciados = chamadoDenunciado.length;
	  	$scope.chamadosTotal = $scope.chamadosAbertos + $scope.chamadosSolucionados;
   	}); 


	$scope.criarCategoria = function(categoria, orgao){
		firebase.database().ref('categorias').child(categoria).update({
			categoria: categoria,
			orgaoResponsavel: orgao
		}, function(error){
			if (error) {
				console.log(error);
				Materialize.toast('Ocorreu algum erro', 4000);
				$scope.form.categoriaForm.$setPristine();
			} else {
				console.log('Categoria criada com sucesso');
				Materialize.toast('Categoria criada com sucesso!', 4000);
			}
		});
	};


	var refCategorias = firebase.database().ref('categorias');
	$scope.categorias = $firebaseArray(refCategorias);
	$scope.categoriasTamanho = $scope.categorias.length;
	
	
	$scope.apagarCategoria = function(categoria){

		firebase.database().ref('categorias').child(categoria).remove();
		Materialize.toast('Categoria removida permanentemente do banco de dados', 4000);

	};

  });
