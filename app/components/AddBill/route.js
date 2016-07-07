'use strict';

function AddBillConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('addbill', {
        url: "/addbill",
        templateUrl: '../app/components/AddBill/addbill.html',
        controller: 'AddBillCtrl',
        controllerAs: 'abCtrl'
    });

    $urlRouterProvider.otherwise('/dashboard');
}

angular.module('HouseShareFinances').config(AddBillConfig);
