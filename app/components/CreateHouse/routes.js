'use strict';

function CreateHouseConfig($stateProvider) {
    $stateProvider.state('createhouse', {
        url: "/createhouse",
        templateUrl: '../app/components/CreateHouse/createhouse.html',
        controller: 'CreateHouseCtrl',
        controllerAs: 'chCtrl'
    });
}

angular.module('FinanceManager').config(CreateHouseConfig);
