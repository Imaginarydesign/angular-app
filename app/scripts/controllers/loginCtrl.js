'use strict';

angular.module('angularAppApp')
  .controller('LoginCtrl', function ($scope, $location) {

    $scope.credentials = {
      username:'',
      password:''
    };

    $scope.login = function(){
      if($scope.credentials.username === 'adam') {
        console.log('logged in');
        var loginDestination ='/home';
        $location.path(loginDestination);
      } else {
        console.log('not logged in');
      }
    };

  });
