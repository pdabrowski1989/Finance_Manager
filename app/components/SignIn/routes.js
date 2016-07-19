'use strict';

function SignInConfig($stateProvider) {
    $stateProvider.state('signIn', {
        url: "/signIn",
        templateUrl: '../app/components/SignIn/signIn.html',
        controller: 'SignInCtrl',
        controllerAs: 'siCtrl'
    });
}

angular.module('FinanceManager').config(SignInConfig);
