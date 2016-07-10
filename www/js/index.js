'use strict';

angular.module('HouseShareFinances', ['ui.router']);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainCtrl = function MainCtrl() {
    _classCallCheck(this, MainCtrl);

    var mCtrl = this;
    console.log('aaa');
};

angular.module('HouseShareFinances').controller('MainCtrl', MainCtrl);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddBillCtrl = function AddBillCtrl() {
    _classCallCheck(this, AddBillCtrl);

    var abCtrl = this;
};

angular.module('HouseShareFinances').controller('AddBillCtrl', AddBillCtrl);
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

angular.module('HouseShareFinances').config(AddBillConfig);
/**
 * Created by PawelD on 2016-07-06.
 */
"use strict";
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateHouseCtrl = function CreateHouseCtrl() {
    _classCallCheck(this, CreateHouseCtrl);

    var chCtrl = this;
};

angular.module('HouseShareFinances').controller('CreateHouseCtrl', CreateHouseCtrl);
'use strict';

function CreateHouseConfig($stateProvider) {
    $stateProvider.state('createhouse', {
        url: "/createhouse",
        templateUrl: '../app/components/CreateHouse/createhouse.html',
        controller: 'CreateHouseCtrl',
        controllerAs: 'chCtrl'
    });
}

angular.module('HouseShareFinances').config(CreateHouseConfig);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardCtrl = function DashboardCtrl() {
    _classCallCheck(this, DashboardCtrl);

    var dCtrl = this;
};

angular.module('HouseShareFinances').controller('DashboardCtrl', DashboardCtrl);
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

angular.module('HouseShareFinances').config(DashboardConfig);
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

angular.module('HouseShareFinances').controller('LogInCtrl', LogInCtrl);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogInService = function LogInService($http) {
    _classCallCheck(this, LogInService);

    $http.get('');
};

angular.module('HouseShareFinances').service('LogInService', LogInService);
'use strict';

function LoginConfig($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: '../app/components/LogIn/login.html',
        controller: 'LogInCtrl',
        controllerAs: 'lCtrl'
    });
}

angular.module('HouseShareFinances').config(LoginConfig);
'use strict';

function navbar() {
    return {
        restrict: 'E',
        controller: 'NavbarCtrl',
        controllerAs: 'nCtrl',
        templateUrl: '../app/components/Navbar/navbar.html'
    };
}

angular.module('HouseShareFinances').directive('navbar', navbar);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarCtrl = function NavbarCtrl() {
    _classCallCheck(this, NavbarCtrl);

    var nCtrl = this;
};

angular.module('HouseShareFinances').controller('NavbarCtrl', NavbarCtrl);
"use strict";
"use strict";
'use strict';

function toolbar() {
    return {
        restrict: 'E',
        controller: 'ToolbarCtrl',
        controllerAs: 'tCtrl',
        templateUrl: '../app/components/Toolbar/toolbar.html'
    };
}

angular.module('HouseShareFinances').directive('toolbar', toolbar);
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

angular.module('HouseShareFinances').controller('ToolbarCtrl', ToolbarCtrl);
'use strict';

function bill() {
    return {
        restrict: 'E',
        controller: 'BillCtrl',
        controllerAs: 'bCtrl',
        templateUrl: '../app/components/Dashboard/Bill/bill.html'
    };
}

angular.module('HouseShareFinances').directive('bill', bill);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BillCtrl = function BillCtrl() {
    _classCallCheck(this, BillCtrl);

    var bCtrl = this;
    bCtrl.name = '1';
    bCtrl.percents = 0;

    bCtrl.percentsLeft = 100 - bCtrl.percents;
};

angular.module('HouseShareFinances').controller('BillCtrl', BillCtrl);