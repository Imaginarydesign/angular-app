'use strict';

angular.module('angularAppApp')
  .controller('LoginCtrl', function ($scope, AuthService) {

    $scope.credentials = {
      username:'',
      password:''
    };

    $scope.login = function(){
      AuthService.login($scope.credentials);
    };

  });
