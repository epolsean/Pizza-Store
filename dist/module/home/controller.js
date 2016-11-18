(function (app) {
    'use strict';

    app.ngHome = angular.module('homeModule', [])
    app.ngHome.controller('homeCtrl', ['homeFac', 'homeSvc', function (homeFac, homeSvc) {
        var that = this;

        that.hello = 'hello home';
        that.facto = homeFac();
        that.servi = homeSvc.msg;
        homeSvc.get('people', Math.round((Math.random() * 87) + 1), function (data) {
            that.swapi1 = data;
        });
        homeSvc.get('planets', Math.round((Math.random() * 60) + 1), function (data) {
            that.swapi2 = data;
        });
        homeSvc.get('starships', Math.round((Math.random() * 12) + 1), function (data) {
            that.swapi3 = data;
        });
    }])

})(window.pizzaApp);