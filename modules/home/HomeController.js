'use strict';
angular.module('Home')

.controller('HomeController', ['$scope','$rootScope','$http',
    function($scope,$rootScope,$http) {
      $scope.users;
      $scope.error;
      $scope.getUsers = function(){
        $http.get($rootScope.apiUrl + 'authenticate').success(function(users){
          $scope.users = users;
        }).error(function(error){
          $scope.error = error;
        })
      }
    }
]);
