var app = angular.module('myApp', []);

app.controller('myCtrl1', function($scope) {
  $scope.fname= "New";
    $scope.lname= "User";
});

app.controller('myCtrl2', function($scope) {
    $scope.fname= "New";
    $scope.lname= "User";
});

app.directive('placehold', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ctrl) {      
      
      var value;
      
      var placehold = function () {
          element.val(attr.placehold)
      };
      var unplacehold = function () {
          element.val('');
      };
      
      scope.$watch(attr.ngModel, function (val) {
        value = val || '';
      });

      element.bind('focus', function () {
         if(value == '' || value == 'New' || value == 'User') unplacehold();
      });
      
      element.bind('blur', function () {
         if (element.val() == '') placehold();
      });
      
      ctrl.$formatters.unshift(function (val) {
        if (!val) {
          placehold();
          value = '';
          return attr.placehold;
        }
        return val;
      });
    }
  };
});
