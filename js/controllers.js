angular.module('starter.controllers', [ ])

.controller('LoginCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	//alert("LoginCtrl");
	$scope.logIn=function()
	{
		$location.path("/app/portfolio");
	}
})

.controller('PortfolioCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('CartradeCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('ContributionCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('FlexibleCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('MakeCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('DisbursementCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('ActivityCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('HealthCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('HsaCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('RecentCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('RecentdisburseCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('ScheduledcontributeCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('InformationCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('ActivitystmntCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('AvailablebalanceCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('AccountCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('PaymeCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('newclaimCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})

.controller('TaxyearCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	
})



.controller('AppCtrl', function($scope,$ionicPopup, $timeout ,$ionicModal,$location) {
 $scope.exit = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Do you want to close',
      
       template: 'Are you sure',
        buttons : [{
    text : 'yes',
    type : 'button-positive button-outline',
   }, {
    text : 'No',
    type : 'button-positive button-outline',
    
   }]
     });
       
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
          console.log('You are not sure');
       }
     });
   };
   
$scope.toggleSomething = function(){
  $scope.isVisible = !$scope.isVisible;
  console.log('make sure toggleSomething() is firing*');
}




})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
