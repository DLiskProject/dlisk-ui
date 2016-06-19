require('angular');

angular.module('dliskApp').factory('addDappModal', function (btfModal) {
    return btfModal({
        controller: 'addDappModalController',
        templateUrl: '/partials/modals/addDappModal.html'
    });
});
