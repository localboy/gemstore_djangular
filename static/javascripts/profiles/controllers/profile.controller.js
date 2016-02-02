(function(){
    'use strict';

    angular
        .module('gemstore.profiles.controllers')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', '$routeParams', 'Posts', 'Profile', 'Snackbar'];


    function ProfileController($location, $routeParams, Posts, Profile, Snackbar) {
        var vm = this;

        vm.profile = undefined;
        vm.post =[];

        active();

        function active() {
            var username = $routeParams.username.substr(1);

            Profile.get(username).then(profileSuccessFn, profileErrorFn);
            Posts.get(username).then(postsSuccessFn, postsErrorFn);

            function profileSuccessFn(data, status, headers, config) {
                vm.profile = data.data
            }

            function profileErrorFn(data, status, headers, config) {
                $location.url('/');
                Snackbar.error('That user does not exist.');
            }

            function postsSuccessFn(data, headers, status, config) {
                vm.posts = data.data;
            }

            function postsErrorFn(data, headers, status, config) {
                Snackbar.error(data.data.error);
            }
        }
    }
})();