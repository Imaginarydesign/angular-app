'use strict';

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, AuthService) {

    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    $scope.logout = function(){
      AuthService.logout();
    };

  });
