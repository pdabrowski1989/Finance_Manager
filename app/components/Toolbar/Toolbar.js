'use strict';

function toolbar() {
    return {
        restrict: 'E',
        controller: 'ToolbarCtrl',
        controllerAs: 'tCtrl',
        templateUrl: '../app/components/Toolbar/toolbar.html'
    }
}

angular
    .module('HouseShareFinances')
    .directive('toolbar', toolbar);