(function(){
    'use strict';

    angular
        .module('gemstore.products.services')
        .factory('Products', Products);

    Products.$inject = ['$http'];

    function Products($http) {
        var products = {
            getProducts: getProducts
        }

        return products

        function getProducts() {
            var hello = 'Hello there!'
            $http.get('/products/api/?format=json').success(function(data){
                products=data
            }).error(function(){
                alert('error')
            });
        }

    }

})();