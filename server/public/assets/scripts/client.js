var app = angular.module('politicianParty', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/',{
            templateUrl:'views/home.html',
            controller: 'HomeController'
        })
        .when('/about',{
            templateUrl:'views/about.html',
            controller: 'AboutController'
        })
        .when('/jobs', {
            templateUrl: 'views/jobs.html',
            controller: 'JobsController'
        })
        .when('/rank',{
            templateUrl:'views/rank.html',
            controller: 'RankController'
        });

    $locationProvider.html5Mode(true);
});