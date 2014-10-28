angular.module('routina')

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, localStorageService) {

  $scope.tasks = localStorageService.get('tasks');
        if ( $scope.tasks === null) {
            $scope.tasks = [];
        }

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('NewTaskCtrl', function($scope, $state, localStorageService) {
   $scope.showForm = true;
   $scope.task = {};
   $scope.task.recurrency = {};
	$scope.recurrencyUnits = ['days', 'months'];
	
    $scope.submit = function() {
        if(!$scope.task.name) {
            alert('Name required');
            return;
        }
        if(!$scope.task.executionDate) {
            alert('Date required');
            return;
        }
        
        
/*        if(!$scope.task.recurrency.undefined) {
            $scope.task.recurrent = 'false';
        }
  */      $scope.showForm = false;

        $scope.tasks.push($scope.task);
        localStorageService.set('tasks',$scope.tasks);
    };
    $scope.goToTasks = function () {
		$state.go('eventmenu.tasks');	  		
  	};

})
.controller('TasksCtrl', function($scope, localStorageService) {

   

});