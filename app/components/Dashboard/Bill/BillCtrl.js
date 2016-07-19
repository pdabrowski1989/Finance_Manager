'use strict';

class BillCtrl {
    constructor() {
        let bCtrl = this;
        bCtrl.name = '1';
        bCtrl.percents = 0;

        bCtrl.percentsLeft = 100 - bCtrl.percents;
    }
}

angular
    .module('FinanceManager')
    .controller('BillCtrl', BillCtrl);