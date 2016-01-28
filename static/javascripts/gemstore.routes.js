(function(){
    'use strict';

    angular
        .module('gemstore.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider.when('/register', {
            controller: 'RegisterController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/register.html'
        }).when('/products', {
            controller: 'ProductController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/register.html'
        }).when('/login', {
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/login.html'
        }).when('/',{
            controller: 'ProductController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/products/products.html'
        }).otherwise('/');
    }
})();