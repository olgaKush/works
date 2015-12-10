(function() {
	var myApp = angular.module('myApp', []);
	
	myApp.controller('RespController', function(){
    this.respondents = people;
	this.roles = positions;
  });
  
	myApp.controller('TabController', function(){
		this.tabs=1;
		this.setTab= function(setTab) {
			this.tab = setTab;
		};
		this.isSet = function(checkTab) {
			return this.tab === checkTab;
		};
	});
myApp.directive('customAccordion', function () {
	
    return {
        scope:{
            ngModel: '=',
        },
        restrict: 'A',
        template: '<br><div class="panel-group" id="{{panelId}}">\
                       <div class="panel panel-default" ng-repeat-start="item in ngModel | filter:{ role: \'manager\'}:true">\
                           <div class="panel-heading">\
                               <h4 class="panel-title">\
<a ng-click="toggleCollapsedStates($index)" href="#{{panelBaseId}}-{{$index}}">{{item.email}}</a>\
                               <span class="label label-default">{{item.status}}</span></h4>\
                           </div>\
<div id="{{panelBaseId}}-{{$index}}" data-parent="#{{panelId}}" class="panel-collapse collapse">\
                               <div class="panel-body">{{item.language}}</div>\
                           </div>\
                       </div>\
                       <div ng-repeat-end></div>\
                   </div>',
        link: function (scope, el, attrs) {
            scope.panelBaseId = attrs.collapsePanelBodyId;
            scope.panelId = attrs.collapsePanelId;
        
            $(document).ready(function(){
                angular.forEach(scope.ngModel, function(value, key){
                    if (value.collapsed)
                    {
                        $("#" + scope.panelBaseId + "-" + key).collapse('show');
                    }
                });
            });
        
            scope.toggleCollapsedStates = function(ind){
                angular.forEach(scope.ngModel, function(value, key){
                    if (key == ind)
                    {
                        scope.ngModel[key].collapsed = !scope.ngModel[key].collapsed;
                        $("#" + scope.panelBaseId + "-" + ind).collapse('toggle');
                    }
                    else
                        scope.ngModel[key].collapsed = false;
                });
            }
        }
    };
});	
angular.module('CustomComponents', ['myApp']);	
	
	var people = [
		{
			email:'user1@test.org',
			language:'german',
			role:'manager',
			status:'completed'
		},
		{
			email:'user2@test.org',
			language:'english',
			role:'subordinate',
			status:'not answered'
		},
		{
			email:'user3@test.org',
			language:'finnish',
			role:'colleague',
			status:'completed'
		},
		{
			email:'user4@test.org',
			language:'english',
			role:'manager',
			status:'not started'
		}
	];
	
	var positions = [{manager:'manager'},{subordinate:'subordinate'},{colleague:'colleague'}];
	
	myApp.controller('CustomDirectivesController', ['$scope', function($scope)
{
    $scope.addManager = function() {
        $scope.collapseData.push({
            title: $scope.email,
            content: $scope.language,
        });
        
        $scope.email = '';
        $scope.language = '';
    };
    
    $scope.collapseData = people;
}]);
	
})();