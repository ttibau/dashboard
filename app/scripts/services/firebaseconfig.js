'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.FirebaseConfig
 * @description
 * # FirebaseConfig
 * Factory in the dashboardApp.
 */
angular.module('dashboardApp')
  .factory('FirebaseConfig', function () {
  
  var config = {
    apiKey: "AIzaSyCyc2ALBgjefwiRi2JmgnbthRyoItc5xDI",
    authDomain: "prefeitura-itaborai.firebaseapp.com",
    databaseURL: "https://prefeitura-itaborai.firebaseio.com",
    storageBucket: "prefeitura-itaborai.appspot.com",
    messagingSenderId: "173683396331"
  };

  return config;

  });
