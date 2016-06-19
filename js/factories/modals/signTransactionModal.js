require('angular');

angular.module('dliskApp').factory('passphraseCheck', function (btfModal) {
    return btfModal({
        controller: 'passphraseCheckController',
        templateUrl: '/partials/modals/passphraseCheck.html'
    });
});
