'use strict';

angular.module('angularAppApp')
  .factory('AuthService', function($location) {
    return {
      login: function(credentials) {
        if(credentials.username === 'adam') {
          var loginDestination ='/home';
          $location.path(loginDestination);
        } else {
          console.log('not logged in');
        }
      },
      logout: function() {
        var logoutDestination ='/login';
        $location.path(logoutDestination);
      }
    };
  });