'use strict';
angular.module('Auth', []);
angular.module('Home', []);
angular.module('MyApp', [
        'ngRoute',
        'ui.router',
        'satellizer',
        'Home',
        'Auth',
    ])
    .config(['$routeProvider', '$authProvider', function($routeProvider, $authProvider, $rootScope) {

        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'modules/home/views/home.html',
                hideMenus: true
            })
            .when('/login', {
                controller: 'AuthController',
                templateUrl: 'modules/authentication/views/login.html',
                hideMenus: true
            })
            .otherwise({
                template: "<h1>None</h1><p>Nothing has been selected,</p>"
            });
        $authProvider.loginUrl = 'http://192.168.10.10/api/authenticate';


    }])

.run(['$rootScope', '$location', '$http',
    function($rootScope, $location, $http) {
      $rootScope.apiUrl = 'http://192.168.10.10/api/';
    }
]);
// run(['$rootScope', '$location', '$http',
//     $rootScope.$on('$locationChangeStart', function(event, next, current) {
//         $rootScope.apiUrl = 'http://192.168.10.10/api/';
//     })
// ]);
