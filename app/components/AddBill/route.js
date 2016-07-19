'use strict';

function AddBillConfig($stateProvider) {
    $stateProvider.state('addbill', {
        url: "/addbill",
        templateUrl: '../app/components/AddBill/addbill.html',
        controller: 'AddBillCtrl',
        controllerAs: 'abCtrl'
    });
}

angular.module('FinanceManager').config(AddBillConfig);
