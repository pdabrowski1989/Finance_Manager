'use strict';

class LogInCtrl {
    constructor() {
        let lCtrl = this;
        lCtrl.user = {};
        lCtrl.sayUser = () => {
            console.log(this.user.name)
        }

    }
}

angular
    .module('HouseShareFinances')
    .controller('LogInCtrl',  LogInCtrl);