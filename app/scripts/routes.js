angular.
    module('playground').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/playground', {
              templateUrl: 'views/playground.html'
            }).
            when('/panes', {
              templateUrl: 'views/panes.html'
            }).
            when('/play2', {
              templateUrl: 'views/playground.html'
            }).
            when('/play3', {
              templateUrl: 'views/playground.html'
            }).
            otherwise('/playground');
      }
    ]);