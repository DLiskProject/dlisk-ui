require('angular');

angular.module('dliskApp').factory('errorModal', function (btfModal) {
    return btfModal({
        controller: 'errorModalController',
        templateUrl: '/partials/modals/errorModal.html'
    });
});
