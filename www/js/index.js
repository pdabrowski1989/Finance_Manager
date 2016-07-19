'use strict';

angular.module('FinanceManager', ['ui.router']);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainCtrl = function MainCtrl() {
    _classCallCheck(this, MainCtrl);

    var mCtrl = this;
    console.log('aaa');
};

angular.module('FinanceManager').controller('MainCtrl', MainCtrl);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddBillCtrl = function AddBillCtrl() {
    _classCallCheck(this, AddBillCtrl);

    var abCtrl = this;
};

angular.module('FinanceManager').controller('AddBillCtrl', AddBillCtrl);
"use strict";
'use strict';

function AddBillConfig($stateProvider) {
    $stateProvider.state('addbill', {
        url: "/addbill",
        templateUrl: '../app/components/AddBill/addbill.html',
        controller: 'AddBillCtrl',
        controllerAs: 'abCtrl'
    });
}

angular.module('FinanceManager').config(AddBillConfig);
/**
 * Created by PawelD on 2016-07-06.
 */
"use strict";
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogInCtrl = function LogInCtrl() {
    var _this = this;

    _classCallCheck(this, LogInCtrl);

    var lCtrl = this;
    lCtrl.user = {};
    lCtrl.sayUser = function () {
        console.log(_this.user.name);
    };
};

angular.module('FinanceManager').controller('LogInCtrl', LogInCtrl);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogInService = function LogInService($http) {
    _classCallCheck(this, LogInService);

    $http.get('');
};

angular.module('FinanceManager').service('LogInService', LogInService);
'use strict';

function LoginConfig($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: '../app/components/LogIn/login.html',
        controller: 'LogInCtrl',
        controllerAs: 'lCtrl'
    });
}

angular.module('FinanceManager').config(LoginConfig);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateHouseCtrl = function CreateHouseCtrl() {
    _classCallCheck(this, CreateHouseCtrl);

    var chCtrl = this;
};

angular.module('FinanceManager').controller('CreateHouseCtrl', CreateHouseCtrl);
'use strict';

function CreateHouseConfig($stateProvider) {
    $stateProvider.state('createhouse', {
        url: "/createhouse",
        templateUrl: '../app/components/CreateHouse/createhouse.html',
        controller: 'CreateHouseCtrl',
        controllerAs: 'chCtrl'
    });
}

angular.module('FinanceManager').config(CreateHouseConfig);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardCtrl = function DashboardCtrl() {
    _classCallCheck(this, DashboardCtrl);

    var dCtrl = this;
};

angular.module('FinanceManager').controller('DashboardCtrl', DashboardCtrl);
"use strict";
'use strict';

function DashboardConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
        url: "/dashboard",
        templateUrl: '../app/components/Dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dCtrl'
    });

    $urlRouterProvider.otherwise('/dashboard');
}

angular.module('FinanceManager').config(DashboardConfig);
'use strict';

function toolbar() {
    return {
        restrict: 'E',
        controller: 'ToolbarCtrl',
        controllerAs: 'tCtrl',
        templateUrl: '../app/components/Toolbar/toolbar.html'
    };
}

angular.module('FinanceManager').directive('toolbar', toolbar);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToolbarCtrl = function ToolbarCtrl() {
    _classCallCheck(this, ToolbarCtrl);

    var tCtrl = this,
        date = new Date();

    tCtrl.months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

    tCtrl.currentMonth = tCtrl.months[date.getMonth()];

    console.log(tCtrl.currentMonth);
};

angular.module('FinanceManager').controller('ToolbarCtrl', ToolbarCtrl);
'use strict';

function navbar() {
    return {
        restrict: 'E',
        controller: 'NavbarCtrl',
        controllerAs: 'nCtrl',
        templateUrl: '../app/directives/Navbar/navbar.html'
    };
}

angular.module('FinanceManager').directive('navbar', navbar);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarCtrl = function NavbarCtrl() {
    _classCallCheck(this, NavbarCtrl);

    var nCtrl = this;
};

angular.module('FinanceManager').controller('NavbarCtrl', NavbarCtrl);
'use strict';

function SignInConfig($stateProvider) {
    $stateProvider.state('signIn', {
        url: "/signIn",
        templateUrl: '../app/components/SignIn/signIn.html',
        controller: 'SignInCtrl',
        controllerAs: 'siCtrl'
    });
}

angular.module('FinanceManager').config(SignInConfig);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignInCtrl = function SignInCtrl() {
    _classCallCheck(this, SignInCtrl);

    var dCtrl = this;
};

angular.module('FinanceManager').controller('SignInCtrl', SignInCtrl);
"use strict";
'use strict';

function timer() {
    return {
        restrict: 'E',
        controller: 'TimerCtrl',
        controllerAs: 'tCtrl',
        templateUrl: '../app/directives/Timer/timer.html'
    };
}

angular.module('FinanceManager').directive('timer', timer);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimerCtrl = function TimerCtrl($interval, $scope) {
        _classCallCheck(this, TimerCtrl);

        var tCtrl = this;
        tCtrl.date = new Date();

        /////

        tCtrl.currentYear = tCtrl.date.getYear();
        tCtrl.currentMonth = tCtrl.date.getMonth();
        tCtrl.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        tCtrl.currentDay = tCtrl.days[tCtrl.date.getDay()];
        tCtrl.currentHour = tCtrl.date.getHours();
        tCtrl.currentMinute = tCtrl.date.getMinutes();

        tCtrl.currentSecond = $interval(function () {
                return tCtrl.date.getSeconds();
        }, 500);
};

angular.module('FinanceManager').controller('TimerCtrl', TimerCtrl);
'use strict';

function bill() {
    return {
        restrict: 'E',
        controller: 'BillCtrl',
        controllerAs: 'bCtrl',
        templateUrl: '../app/components/Dashboard/Bill/bill.html'
    };
}

angular.module('FinanceManager').directive('bill', bill);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BillCtrl = function BillCtrl() {
    _classCallCheck(this, BillCtrl);

    var bCtrl = this;
    bCtrl.name = '1';
    bCtrl.percents = 0;

    bCtrl.percentsLeft = 100 - bCtrl.percents;
};

angular.module('FinanceManager').controller('BillCtrl', BillCtrl);