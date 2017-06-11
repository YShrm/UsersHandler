// create the module and name it usersApp
var usersApp = angular.module('usersApp', ['ngRoute','ngResource']);
  //'ngResource'

// configure our routes
usersApp.config(function ($routeProvider) {
    $routeProvider

        // Users List
        .when('/', {
            templateUrl: 'pages/users.html',
            controller: 'usersController'
        })

        // User Details
        .when('/user/:userid', {
            templateUrl: 'pages/user.html',
            controller: 'userController'
        })

        // Add Users
        .when('/adduser', {//user/create
            templateUrl: 'pages/addUser.html',
            controller: 'userController'
        });
});
