'use strict';

class ToolbarCtrl {
    constructor() {
        let tCtrl = this,
            date = new Date();

        tCtrl.months = [
            'Styczeń',
            'Luty',
            'Marzec',
            'Kwiecień',
            'Maj',
            'Czerwiec',
            'Lipiec',
            'Sierpień',
            'Wrzesień',
            'Październik',
            'Listopad',
            'Grudzień'
        ];

        tCtrl.currentMonth = tCtrl.months[date.getMonth()];

        console.log(tCtrl.currentMonth)
    }
}

angular
    .module('HouseShareFinances')
    .controller('ToolbarCtrl', ToolbarCtrl);