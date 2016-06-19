require('angular');

angular.module('dliskApp').factory('blockModal', function (btfModal) {
    return btfModal({
        controller: 'blockModalController',
        templateUrl: '/partials/modals/blockModal.html'
    });
});
