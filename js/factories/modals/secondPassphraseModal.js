require('angular');

angular.module('dliskApp').factory('secondPassphraseModal', function (btfModal) {
    return btfModal({
        controller: 'secondPassphraseModalController',
        templateUrl: '/partials/modals/secondPassphraseModal.html'
    });
});
