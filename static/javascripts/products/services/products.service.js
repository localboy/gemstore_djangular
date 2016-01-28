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
            $http.get('http://127.0.0.1:8000/products/api/').success(function(data){
                products=data
            }).error(function(){
                alert('error')
            });
        }

    }

})();