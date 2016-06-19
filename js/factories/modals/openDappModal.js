require('angular');

angular.module('dliskApp').factory('openDappModal', function (btfModal) {
    return btfModal({
        controller: 'openDappModalController',
        templateUrl: '/partials/modals/openDappModal.html'
    });
});
