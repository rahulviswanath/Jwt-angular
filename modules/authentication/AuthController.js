'use strict';
angular.module('Auth')
    .controller('AuthController', ['$scope', '$auth', '$location',
        function($scope, $auth, $location) {

            $scope.login = function() {
                var credentials = {
                    email: $scope.email,
                    password: $scope.password
                }
                $auth.login(credentials).then(function(data) {

                    // If login is successful, redirect to the users state
                    $location.path("/home");
                });
            }

        }
    ]);
