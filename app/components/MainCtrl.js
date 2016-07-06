'use strict';

class MainCtrl {
    constructor() {
        let mCtrl = this;
        console.log('aaa')
    }
}

angular
    .module('ShareBillApp')
    .controller('MainCtrl', MainCtrl);