(function(){
    'use strict';

    angular
        .module('gemstore', [
            'gemstore.routes',
            'gemstore.authentication',
            'gemstore.products'
        ]);

    angular
        .module('gemstore.routes', ['ngRoute']);

    angular
        .module('gemstore.config', []);

    angular
      .module('gemstore')
      .run(run);

    run.$inject = ['$http'];

    /**
    * @name run
    * @desc Update xsrf $http headers to align with Django's defaults
    */
    function run($http) {
        $http.defaults.xsrfCookieName = 'csrftoken';
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    }

})();