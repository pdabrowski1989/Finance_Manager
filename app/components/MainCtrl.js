'use strict';

class MainCtrl {
    constructor() {
        let mCtrl = this;
        console.log('aaa')
    }
}

angular
    .module('ShareBillsApp')
    .controller('MainCtrl', MainCtrl);