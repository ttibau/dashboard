'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('DashboardCtrl', function ($scope) {
   
  	$scope.chamadosAbertos = 14;
  	$scope.chamadosSolucionados = 142;
  	$scope.chamadosTotal = $scope.chamadosAbertos + $scope.chamadosSolucionados;
  	
   
  });
