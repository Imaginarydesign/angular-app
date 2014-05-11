'use strict';

angular.module('angularAppApp')
  .controller('LoginCtrl', function ($scope, $location) {

    window.scope = $scope;

    $scope.credentials = {
      username:'',
      password:''
    };

    $scope.login = function(){
      if($scope.credentials.username === 'adam') {
        console.log('logged in');
        $location.path = ('/');
      } else {
        console.log('not logged in');
      }
    };

  });
