'use strict';

class SignInCtrl {
    constructor(SignInService) {
        let siCtrl = this;
        siCtrl.username;
        siCtrl.createUser = SignInService.createUser;

    }
}

angular
    .module('FinanceManager')
    .controller('SignInCtrl', SignInCtrl);