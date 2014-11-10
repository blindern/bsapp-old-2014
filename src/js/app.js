'use strict';

moment.lang('nb');

var mod = angular.module('BsApp', [
    'ngRoute',
    'ngTouch',
    'ngResource'
]);

mod.constant('apiUrl', 'https://foreningenbs.no/intern/api/');

mod.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexController'
    });
});

mod.filter('customdate', function() {
    return function(datetime, format) {
        return moment(datetime).format(format);
    };
});

mod.controller('IndexController', function($scope, $http, apiUrl, Matmeny) {
    // hent matmeny
    var today = moment().format('YYYY-MM-DD');
    var tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');

    $scope.matmenyLoad = function() {
        $scope.matmeny = null;
        $scope.matmeny_fail = false;

        Matmeny.query({'from': today, 'to': tomorrow}, function(ret) {
            var items = {};
            angular.forEach(ret, function(item) {
                items[item.day] = item;
            });

            var m = {};
            if (items[today]) m.today = items[today];
            if (items[tomorrow]) m.tomorrow = items[tomorrow];
            $scope.matmeny = m;
            $scope.matmenydate = {
                today: today,
                tomorrow: tomorrow
            };
        }, function() {
            $scope.matmeny_fail = true;
        });
    };

    $scope.matmenyLoad();
});

mod.factory('Matmeny', function($resource, $http, apiUrl) {
    var r = $resource(apiUrl+'matmeny', {
        'day': '@day'
    });

    r.storeDays = function(days) {
        return $http.post('api/matmeny', {
            days: days
        });
    };

    return r;
});