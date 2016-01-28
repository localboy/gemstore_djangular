(function(){
    'use strict';

    angular
        .module('gemstore.config')
        .config(config);

    config.$inject = ['$locationProvider'];

    /*
    * Eanabling HTML5 routing
    */

    function config($locationProvider){
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }

})();