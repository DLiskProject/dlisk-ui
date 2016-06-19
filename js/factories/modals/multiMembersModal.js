require('angular');

angular.module('dliskApp').factory('multiMembersModal', function (btfModal) {
    return btfModal({
        controller: 'multiMembersModalController',
        templateUrl: '/partials/modals/multiMembersModal.html'
    });
});
