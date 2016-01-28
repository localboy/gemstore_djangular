(function(){
    'use strict';

    angular
        .module('gemstore.authentication', [
            'gemstore.authentication.controllers',
            'gemstore.authentication.services'
        ]);

    angular
        .module('gemstore.authentication.controllers', []);

    angular
        .module('gemstore.authentication.services', ['ngCookies']);

})();