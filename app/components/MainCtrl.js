'use strict';

class MainCtrl {
    constructor() {
        let mCtrl = this;
        console.log('aaa')
    }
}

angular
    .module('FinanceManager')
    .controller('MainCtrl', MainCtrl);