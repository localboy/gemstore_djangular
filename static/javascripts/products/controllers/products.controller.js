(function(){
    'use strict';

    angular
        .module('gemstore.products.controllers')
        .controller('ProductController', ProductController)

    ProductController.$inject = ['$scope', 'Products'];

    function ProductController($scope, Products) {
        var vm = this;
        vm.products = products;
        vm.test = 'This is test';

        function products() {
            return Products.getProducts();
        }
    }

    /*.controller('ProductController',['$scope','$http',function($scope,$http){
        $http.get('/products/api/').success(function(data){
            $scope.products=data
            $scope.test = 'This is test';
        })
        .error(function(){
            alert('error')
        });
    }]);*/
})();