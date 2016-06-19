require('angular');

angular.module('dliskApp').factory('forgingModal', function (btfModal) {
    return btfModal({
        controller: 'forgingModalController',
        templateUrl: '/partials/modals/forgingModal.html'
    });
});
