'use strict';

angular.module('angularAppApp')
  .controller('LoginCtrl', function ($scope) {

    $scope.users = [{
      username:'adam',
      password:'123'
    }];

    $scope.submit = function() {
      if($scope.username && $scope.password) {
        var user = $scope.username;
        var pass = $scope.password;
        alert("welcome"+user);
       
        $scope.myusers.push({username:user,password:pass});
      }else{
        alert('Invalid Login');
      }
    };
  });
