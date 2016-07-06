'use strict';

class LogInService {
    constructor ($http) {
        $http.get('')
    }
}

angular
    .module('ShareBillApp')
    .service('LogInService', LogInService);