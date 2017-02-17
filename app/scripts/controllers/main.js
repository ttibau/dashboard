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
   
  	firebase.initializeApp(FirebaseConfig);
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
  				console.log(error);
  			});
  	};

  });
