'use strict';

function navbar() {
    return {
        restrict: 'E',
        controller: 'NavbarCtrl',
        controllerAs: 'nCtrl',
        templateUrl: '../app/components/Navbar/navbar.html'
    }
}

angular
    .module('HouseShareFinances')
    .directive('navbar', navbar);