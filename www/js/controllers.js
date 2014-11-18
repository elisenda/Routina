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

.controller('NewTaskCtrl', function($scope, $state, $ionicPopup, localStorageService) {
   $scope.task = {};
   $scope.task.recurrency = {};
   $scope.task.history = [];
	$scope.recurrencyUnits = ['days', 'months'];
	
	$scope.openDatePicker = function() {
		$scope.tmp = {};
		$scope.tmp.newDate = $scope.task.executionDate;
	
		var birthDatePopup = $ionicPopup.show({
			template: '<datetimepicker ng-model="tmp.newDate"></datetimepicker>',
			title: "Date",
			scope: $scope,
			buttons: [{
				text: 'Cancel'
			}, {
				text: '<b>Save</b>',
				type: 'button-positive',
				onTap: function(e) {
					$scope.task.executionDate = $scope.tmp.newDate;
				}
			}]
		});
	}
       
 
	
   $scope.submit = function() {
      if(!$scope.task.name) {
          alert('Name required');
          return;
      }
      if(!$scope.task.executionDate) {
          alert('Date required');
          return;
      } 
      if(!$scope.task.recurrency.unit){
          alert('Units required');
          return;
      }
             
      $scope.tasks.push($scope.task);
      localStorageService.set('tasks',$scope.tasks);
      
    	$state.go('eventmenu.tasks');	  		
   };
   
   
   $scope.goToTasks = function () {
		$state.go('eventmenu.tasks');	  		
  	};

})
.controller('TasksCtrl', function($scope, $ionicSideMenuDelegate, $state, localStorageService) {
	
	$scope.checkedTask = function (i) {
		var task = $scope.tasks[i];
		console.log('index :' + i + ' task name : ' + task.name + ' checked : ' + task.checked);
		
		//if (!task.checked) {		
			task.history.push(new Date());
			task.executionDate = moment().add(task.recurrency.value, task.recurrency.unit);		
			task.checked = false;
			$scope.tasks[i] = task;
			$state.go('eventmenu.tasks');
		//}
	};
	
 $scope.swipeRight = function() {
   console.log("swipeRight");
  };
  
  $scope.swipeLeft = function() {
   	console.log("swipeLeft");
  };	
	
	$scope.stopDrag = function(){
   	$ionicSideMenuDelegate.canDragContent(false);
   	console.log("stopDrag");
  	};
  
   $scope.letDrag = function(){
   	$ionicSideMenuDelegate.canDragContent(true);
   	console.log("letDrag");
  	};
   

});