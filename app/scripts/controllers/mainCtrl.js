'use strict';

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, $location) {
    
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    $scope.logout = function(){
      var logoutDestination ='/login';
      $location.path(logoutDestination);
    };

  });
