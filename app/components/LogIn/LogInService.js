'use strict';

class LogInService {
    constructor ($http) {
        $http.get('')
    }
}

angular
    .module('HouseShareFinances')
    .service('LogInService', LogInService);