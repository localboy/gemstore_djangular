(function(){
    'use strict';

    var app = angular.module('store', ['ngRoute']);
    app.controller('ProductController',['$scope','$http',function($scope,$http){
        $http.get('/products/api/').success(function(data){
            $scope.products=data
        })
        .error(function(){
            alert('error')
        });
    }]);
})();