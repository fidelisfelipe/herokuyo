'use strict';

angular.module('herokuyoApp')
  .controller('DialogController', function ($scope, $mdDialog) {
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };

  
});
