(function (app) {
    'use strict';

    app.ngHome.service('homeSvc', ['$http', function ($http) {
        var url = 'http://swapi.co/api/'

        return {
            msg: 'hello service',
            get: function (type, id, callback) {
                var callUrl = url + type + '/' + id;

                $http.get(callUrl).then(function (res) {
                    callback(res.data);
                }, function (err) {
                    console.log(err);
                })
            },
            post: function () {
                var callUrl = '';

                $http.post(callUrl, JSON.stringify(data)).then(function (res) {
                    
                }, function (err) {
                    console.log(err);
                })
            }
        };
    }]);

    app.ngHome.factory('homeFac', ['$http', function ($http) {
        return function () {
            return 'hello factory';
        }
    }]);

})(window.pizzaApp);