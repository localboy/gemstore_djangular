(function(){
    'use strict';

    angular
        .module('gemstore.layout.controllers')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', 'Authentication', 'Posts', 'Snackbar'];

    function IndexController($scope, Authentication, Posts, Snackbar) {
        var vm = this;

        vm.isAuthenticated = Authentication.isAuthenticated();
        vm.posts = [];

        activate();

        function activate() {
            Posts.all().then(postsSuccessFn, postsErrorFn);

            $scope.$on('post.created', function (event, post) {
                vm.post.unshift(post);
            });

            $scope.$on('post.created.error', function () {
                vm.post.shift();
            });

            function postsSuccessFn(data, status, headers, config) {
                vm.posts = data.data;
            }

            function postsErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }
        }
    }
})();