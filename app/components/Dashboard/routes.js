'use strict';

function DashboardConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
        url: "/dashboard",
        templateUrl: '../app/components/Dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dCtrl'
    });

    $urlRouterProvider.otherwise('/dashboard');
}

angular.module('FinanceManager').config(DashboardConfig);
