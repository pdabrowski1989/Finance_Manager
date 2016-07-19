'use strict';

class TimerCtrl {
    constructor($interval, $scope) {
        let tCtrl = this;
        tCtrl.date = new Date;

        /////

        tCtrl.currentYear = tCtrl.date.getYear();
        tCtrl.currentMonth = tCtrl.date.getMonth();
        tCtrl.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        tCtrl.currentDay =  tCtrl.days[tCtrl.date.getDay()];
        tCtrl.currentHour = tCtrl.date.getHours();
        tCtrl.currentMinute = tCtrl.date.getMinutes();

        tCtrl.currentSecond = $interval(function() {
          return tCtrl.date.getSeconds();
        }, 500);
    }
}

angular
    .module('HouseShareFinances')
    .controller('TimerCtrl', TimerCtrl);