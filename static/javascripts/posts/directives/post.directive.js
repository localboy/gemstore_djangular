(function(){
    'use strict';

    angular
        .module('gemstore.posts.directives')
        .directive('post', post);

        function post() {
            var directive = {
                restrict: 'E',
                scope: {
                    post: '='
                },
                templateUrl: '/static/template/posts/post.html'
            };

            return directive;
        }
})();