require('angular');

angular.module('dliskApp').factory('blockInfo', function (btfModal) {
    return btfModal({
        controller: 'blockInfoController',
        templateUrl: '/partials/modals/blockInfo.html'
    });
});
