require('angular');

angular.module('dliskApp').factory('multisignatureModal', function (btfModal) {
    return btfModal({
        controller: 'multisignatureModalController',
        templateUrl: '/partials/modals/multisignatureModal.html'
    });
});
