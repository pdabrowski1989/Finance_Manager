'use strict';

function bill() {
    return {
        restrict: 'E',
        controller: 'BillCtrl',
        controllerAs: 'bCtrl',
        templateUrl: '../app/components/Dashboard/Bill/bill.html'
    }
}

angular
    .module('HouseShareFinances')
    .directive('bill', bill);