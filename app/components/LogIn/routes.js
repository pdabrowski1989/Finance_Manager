'use strict';

function LoginConfig($stateProvider) {
    $stateProvider.state('logIn', {
            url: '/logIn',
            templateUrl: '../app/components/LogIn/login.html',
            controller: 'LogInCtrl',
            controllerAs: 'lCtrl'
        }
    )
}

angular
    .module('FinanceManager')
    .config(LoginConfig);
