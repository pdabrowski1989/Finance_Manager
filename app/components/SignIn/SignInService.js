'use strict';

class SignInService {
    constructor($http, $q) {
        let siService = this;
        siService.createUser = createUser;

        function createUser(username) {
            let deferred = $q.defer();

            $http.post('/user', {
                name: username
            }).success(function (data, status) {
                if (status === 200 && data.status) {
                    user = true;
                    deferred.resolve();
                } else {
                    user = false;
                    deferred.reject();
                }
            })
                .error(function (data) {
                    user = false;
                    deferred.reject();
                });

            return deferred.promise;
        }
    }
}

angular
    .module('FinanceManager')
    .service('SignInService', SignInService);