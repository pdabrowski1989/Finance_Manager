'use strict';

class LogInService {
    constructor ($http) {
        $http.get('')
    }
}

angular
    .module('FinanceManager')
    .service('LogInService', LogInService);