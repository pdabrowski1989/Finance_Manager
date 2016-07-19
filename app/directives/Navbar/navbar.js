'use strict';

function navbar() {
    return {
        restrict: 'E',
        controller: 'NavbarCtrl',
        controllerAs: 'nCtrl',
        templateUrl: '../app/directives/Navbar/navbar.html'
    }
}

angular
    .module('FinanceManager')
    .directive('navbar', navbar);