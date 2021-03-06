'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/chamadosSolucionados', {
        templateUrl: 'views/chamadossolucionados.html',
        controller: 'ChamadossolucionadosCtrl',
        controllerAs: 'chamadosSolucionados'
      })
      .when('/responderChamado', {
        templateUrl: 'views/responderchamado.html',
        controller: 'ResponderchamadoCtrl',
        controllerAs: 'responderChamado'
      })
      .when('/chamadosDenunciados', {
        templateUrl: 'views/chamadosdenunciados.html',
        controller: 'ChamadosdenunciadosCtrl',
        controllerAs: 'chamadosDenunciados'
      })
      .when('/categoriachamados', {
        templateUrl: 'views/categoriachamados.html',
        controller: 'CategoriachamadosCtrl',
        controllerAs: 'categoriachamados'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
