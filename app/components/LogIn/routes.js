'use strict';

function LoginConfig($stateProvider) {
    $stateProvider.state('login', {
            url: '/login',
            templateUrl: '../app/components/LogIn/login.html',
            controller: 'LogInCtrl',
            controllerAs: 'lCtrl'
        }
    )
}

angular.module('HouseShareFinances').config(LoginConfig);
