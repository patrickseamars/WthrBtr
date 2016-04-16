var app = angular.module('wthrBtr', ['ionic', 'LocalStorageModule']);

app.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

			// Don't remove this line unless you know what you are doing. It stops the viewport
			// from snapping when text inputs are focused. Ionic handles this internally for
			// a much nicer keyboard experience.
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

app.config(function (localStorageServiceProvider) {
	localStorageServiceProvider
	.setPrefix('wthrBtr');
});

app.controller('main', function($scope, $ionicModal, localStorageService){
	var taskData = 'task';

	$scope.tasks = [];

	$scope.task= {};

	$ionicModal.fromTemplateUrl('new-task-modal.html',{
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal){
		$scope.newTaskModal = modal;
	});

	$scope.openTaskModal = function () {
        $scope.newTaskModal.show();
    };

    $scope.closeTaskModal = function () {
        $scope.newTaskModal.hide();
    };

	$scope.getTasks = function(){
		if(localStorageService.get(taskData)){
			$scope.tasks = localStorageService.get(taskData);
		} else {
			$scope.tasks = [];
		}
	};

	$scope.createTask =function(){
		$scope.tasks.push($scope.task);
		localStorageService.set(taskData, $scope.tasks);
		$scope.task = {};
		//closes the new task modal
		$scope.newTaskModal.hide();
	};

	$scope.removeTask = function(index){
		$scope.tasks.splice(index, 1);
		localStorageService.set(taskData, $scope.tasks);
	};

	$scope.completeTask = function(index){
		if(index !== -1){
			$scope.tasks[index].completed = true;
		}
		localStorageService.set(taskData, $scope.tasks);
	};
})