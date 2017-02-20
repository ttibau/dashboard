'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('MainCtrl', function ($scope, FirebaseConfig, $location, Autenticacao) {
  	var autenticado = false;
  	$scope.login = function(email, password) {
  		firebase.auth().signInWithEmailAndPassword(email, password)
  			.then(function(firebaseUser){
  				console.log(firebaseUser);
  				$location.path('/dashboard');
  				$scope.$apply();
  				autenticado = true;
  				console.log(Autenticacao);
  			})
  			.catch(function(error){
          var mensagemErro;
  				if(error.code == 'auth/invalid-email'){
            mensagemErro = 'O endereço de email é inválido!';
          } else if (error.code == 'auth/user-disabled') {
            mensagemErro = 'O usuário foi desativado.';
          } else if (error.code == 'auth/user-not-found') {
            mensagemErro = 'Usuário não encontrado.';
          } else if (error.code == 'auth/wrong-password'){
            mensagemErro = 'Senha incorreta.';
          }

          Materialize.toast(mensagemErro, 4000);

  			});
  	};

  });
