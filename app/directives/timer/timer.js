'use strict';

function timer() {
    return {
        restrict: 'E',
        controller: 'TimerCtrl',
        controllerAs: 'tCtrl',
        templateUrl: '../app/directives/Timer/timer.html'
    }
}

angular
    .module('FinanceManager')
    .directive('timer', timer);