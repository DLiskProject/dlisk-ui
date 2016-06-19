require('angular');

angular.module('dliskApp').factory('userInfo', function (btfModal) {
    return btfModal({
        controller: 'userInfoController',
        templateUrl: '/partials/modals/userInfo.html'
    });
});
