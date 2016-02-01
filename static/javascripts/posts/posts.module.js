(function(){
    'use strict';

    angular
        .module('gemstore.posts', [
            'gemstore.posts.controllers',
            'gemstore.posts.directives',
            'gemstore.posts.services'
        ]);

    angular
        .module('gemstore.posts.controllers', []);

    angular
        .module('gemstore.posts.directives', ['ngDialog']);

    angular
        .module('gemstore.posts.services', []);
})();