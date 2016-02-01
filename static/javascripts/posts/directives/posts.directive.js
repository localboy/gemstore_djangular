(function(){
    'use strict';

    angular
        .module('gemstore.posts.directives')
        .directive('posts', posts);

    function posts() {
        var directive = {
            controller: 'PostController',
            controllerAs: 'vm',
            ristrict: 'E',
            scope: {
                posts: '='
            },
            templateUrl: '/static/templates/posts/post.html'
        };

        return directive;
    }
})();