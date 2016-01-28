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
            Products.getProducts();
        }
    }
})();