angular.module('starter.controllers', [ ])



.controller('LoginCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	//alert("LoginCtrl");
	
	
	
	$scope.logIn=function(loginData)
	{
		if(loginData.username==""&&loginData.password==""){
			alert("enter username and password");
		}else{
	
		$http.post(' http://app.sterlinghsa.com/api/v1/user/login',{username:loginData.username,password:loginData.password},{headers: {'Content-Type':'application/json; charset=utf-8'} })     
			.success(function(data) {
				//alert(JSON.stringify(data));
				if(data.status=="SUCCESS"){
					localStorage.setItem('access_token',data.access_token);
					localStorage.setItem('username',loginData.username);
					
					$location.path("/app/portfolio");
				}
			}).error(function(){ 
						
			  alert("Error")
			});
			
		}
		
		
	}
	 if(localStorage.getItem('access_token')==null){
		
	}else{
			$location.path("/app/portfolio");
				
	} 
	
})

.controller('PortfolioCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork,$rootScope) {
	localStorage.setItem("backCount","1");
	$scope.username = localStorage.getItem('username');
	$scope.access_token = localStorage.getItem('access_token');
	alert($scope.username+"--"+$scope.access_token);
		
	
	$http.get(" http://app.sterlinghsa.com/api/v1/accounts/portfolio",{headers: {'Content-Type':'application/json; charset=utf-8','Authorization':$scope.access_token} } )
 .success(function(data){
	 alert( JSON.stringify(data.account_types.HSA));
	 $rootScope.account=data.account_types;
	  localStorage.setItem('account_types',data.account_types.HSA);
	   // alert( JSON.stringify( $rootScope.account));   	
 }, function(err){
  alert("ERROR: " + JSON.stringify(err));
 })	 
	
})
.controller('AvailablebalanceCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","3");
	$scope.username = localStorage.getItem('username');
	$scope.access_token = localStorage.getItem('access_token');
	
	$http.get(" http://app.sterlinghsa.com/api/v1/accounts/balances",{headers: {'Content-Type':'application/json; charset=utf-8','Authorization':$scope.access_token} } )
 .success(function(data){
	 alert( JSON.stringify(data));
	
	 // $rootScope.account=data.account_types;
	 // localStorage.setItem('account_information',data.account_information);
	   // alert( JSON.stringify( $scope.account_information));   	
 }, function(err){
  alert("ERROR: " + JSON.stringify(err));
 })	
})


.controller('FlexibleCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","2");
	
})

.controller('HsaCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","2");
})

.controller('contactCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","2");
})

.controller('NewCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","2");
	$scope.getClaim = function(claim) {
		
		if(claim =='Bicycle'){
			
			$location.path("/app/newclaim");
		}else if(claim =='Transit'){
			$location.path("/app/newclaimbicycle");
		}   
	}
})

.controller('MakeCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","3");
})

.controller('ActivityCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","3");
})

.controller('HealthCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","3");
})

.controller('InformationCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork,$rootScope) {
	localStorage.setItem("backCount","3");
	$scope.acc=$rootScope.account;
	$scope.accnumber=$rootScope.account.FSA.ACCT_NUM;
	// alert(JSON.stringify($scope.acc.FSA.ACCT_NUM));
	
})

.controller('AccountCtrl', function($rootScope,$scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","3");
	alert("ghf");
	$scope.username = localStorage.getItem('username');
	$scope.access_token = localStorage.getItem('access_token');
	//$rootScope.account=data.account_types;
	//var params={'type':'hsa','acc_num':'ICA300298'};
	$http.get('http://app.sterlinghsa.com/api/v1/accounts/accountinfo',{headers: {'Content-Type':'application/json; charset=utf-8','Authorization':$scope.access_token} } )
 .success(function(data){
	 alert(JSON.stringify(data));
	 //alert(JSON.stringify(data));
	 localStorage.setItem('account_information',data.account_information);
	 $scope.account_information=data.account_information;
	    alert( JSON.stringify( $scope.account_information));   	
 }, function(err){
  alert("ERROR: " + JSON.stringify(err));
 })	
	
	
})



.controller('newclaimCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	 localStorage.setItem("backCount","3");
})
.controller('NewclaimbicycleCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	 localStorage.setItem("backCount","3");
})

.controller('FlexibleactivityCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","3");
})

.controller('RecentdisCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","4");
})

.controller('RecentcontributeCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","4");
})

.controller('TaxyearCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","4");
})

.controller('ActivitystmntCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","4");
	$scope.activity={startDate:'',EndtDate:''};
	
	$scope.getStartDate=function(){
		
		 var options = {
				date: new Date(),
				mode: 'date', // or 'time'
				minDate: new Date(),
				
			}
		   
			$ionicPlatform.ready(function(){
				$cordovaDatePicker.show(options).then(function(date){
					
					var date1=date.toString();
					var dataas=date1.split(" ");
					var Month = ["App","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
					//var mon = Month.indexOf(dataas[1]); 
					var mon=""; 
					if(Month.indexOf(dataas[1]).toString().length==1)
					{
						mon="0"+Month.indexOf(dataas[1]);

					}
					else
					{
						mon = Month.indexOf(dataas[1]);
					}
					//var selectedDate=dataas[3]+'/'+mon+'/'+dataas[2];
				
					var selectedDate=mon+'/'+dataas[2]+'/'+dataas[3];
					$scope.activity.startDate=selectedDate;
				});
			})
		
	};
	$scope.getEndDate=function(){
		
		 var options = {
				date: new Date(),
				mode: 'date', // or 'time'
				minDate: new Date(),
				
			}
		   
			$ionicPlatform.ready(function(){
				$cordovaDatePicker.show(options).then(function(date){
					
					var date1=date.toString();
					var dataas=date1.split(" ");
					var Month = ["App","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
					//var mon = Month.indexOf(dataas[1]); 
					var mon=""; 
					if(Month.indexOf(dataas[1]).toString().length==1)
					{
						mon="0"+Month.indexOf(dataas[1]);

					}
					else
					{
						mon = Month.indexOf(dataas[1]);
					}
					//var selectedDate=dataas[3]+'/'+mon+'/'+dataas[2];
				
					var selectedDate=mon+'/'+dataas[2]+'/'+dataas[3];
					$scope.activity.EndtDate=selectedDate;
				});
			})
		
	};
})

.controller('PaymeCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","4");
	$scope.TransDate="";
	
	$scope.getTransDate=function(){
		 var options = {
				date: new Date(),
				mode: 'date', // or 'time'
				minDate: new Date(),
				
			}
		   
			$ionicPlatform.ready(function(){
				$cordovaDatePicker.show(options).then(function(date){
					
					var date1=date.toString();
					var dataas=date1.split(" ");
					var Month = ["App","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
					//var mon = Month.indexOf(dataas[1]); 
					var mon=""; 
					if(Month.indexOf(dataas[1]).toString().length==1)
					{
						mon="0"+Month.indexOf(dataas[1]);

					}
					else
					{
						mon = Month.indexOf(dataas[1]);
					}
					//var selectedDate=dataas[3]+'/'+mon+'/'+dataas[2];
				
					var selectedDate=mon+'/'+dataas[2]+'/'+dataas[3];
					$scope.TransDate=selectedDate;
				});
			})
		
	};
	
})

.controller('PayproviderCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","4");
	$scope.TransDate="";
	
	$scope.getTransDate=function(){
		
		 var options = {
				date: new Date(),
				mode: 'date', // or 'time'
				minDate: new Date(),
				
			}
		   
			$ionicPlatform.ready(function(){
				$cordovaDatePicker.show(options).then(function(date){
					
					var date1=date.toString();
					var dataas=date1.split(" ");
					var Month = ["App","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
					//var mon = Month.indexOf(dataas[1]); 
					var mon=""; 
					if(Month.indexOf(dataas[1]).toString().length==1)
					{
						mon="0"+Month.indexOf(dataas[1]);

					}
					else
					{
						mon = Month.indexOf(dataas[1]);
					}
					//var selectedDate=dataas[3]+'/'+mon+'/'+dataas[2];
				
					var selectedDate=mon+'/'+dataas[2]+'/'+dataas[3];
					$scope.TransDate=selectedDate;
				});
			})
		
	};
})

.controller('ContributionCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","4");
})

.controller('DisbursementCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","4");
})


.controller('ScheduledcontributeCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","5");
})

.controller('RecentCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","5");
})

.controller('RecentdisburseCtrl', function($scope,$ionicPlatform,$cordovaDatePicker,$http,$location,$ionicModal,$cordovaDialogs,$ionicLoading,$cordovaNetwork) {
	localStorage.setItem("backCount","5");
})





.controller('AppCtrl', function($scope,$ionicPopup, $timeout ,$ionicModal,$location) {
 $scope.exiqt = function() {
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
  
$scope.exit=function()
{
	$location.path("/login");	
}
  
$scope.toggleSomething = function(){
  $scope.isVisible = !$scope.isVisible;
  console.log('make sure toggleSomething() is firing*');
}
$scope.toggleSomething1 = function(){
  $scope.isVisible1 = !$scope.isVisible1;
  console.log('make sure toggleSomething() is firing*');
}



})

.controller('HeaderCtrl', function($scope,$ionicPopup, $timeout ,$ionicModal,$location, $ionicHistory, $cordovaDialogs) {
	$scope.Logout = function() {
		$cordovaDialogs.confirm('Are You Sure', 'Do you Want to Logout', ['Yes','No'])
		.then(function(buttonIndex) {
			if (buttonIndex=='1') {
				localStorage.clear();
				$location.path("/login");
			}
		});
	};
})

.controller('FooterCtrl', function($scope,$ionicPopup, $timeout ,$ionicModal,$location, $ionicHistory,$ionicSideMenuDelegate, $cordovaDialogs) {
	$scope.homePage = function() {
		$location.path("/app/portfolio");
	};
	
	$scope.goBack = function() {
		//alert(localStorage.getItem("backCount"));
		if (localStorage.getItem("backCount")==1) {
			//code
			//alert('1');
			localStorage.setItem("backCount","0")
			//$location.path("/first");
			$cordovaDialogs.confirm('Are You Sure', 'Do you Want to Close ', ['Yes','No'])
			.then(function(buttonIndex) {
				if (buttonIndex=='1') {
					ionic.Platform.exitApp();
				}
			});
		}else if(localStorage.getItem("backCount")==0){
			$cordovaDialogs.confirm('Are You Sure', 'Do you Want to Close ', ['Yes','No'])
			.then(function(buttonIndex) {
				if (buttonIndex=='1') {
					ionic.Platform.exitApp();
				}
			});
		}
		else if (localStorage.getItem("backCount")>1) 
		{
			//alert('2');
			var backcount=parseInt(localStorage.getItem("backCount"));
			var backcount=backcount-1;
			localStorage.setItem("backCount",backcount);
			
			window.history.back();
		}
	};
	
})

.controller('contactCtrl', function($scope, $stateParams, $http) {
	localStorage.setItem("backCount","2");
	// $http.post('http://www.test.sedarspine.com/en/spineLogisticsApp/getBuildTypeLocal',{headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} })     
    // .success(function(data) {      
        // //alert("success");
		// alert(JSON.stringify(data));
    // }).error(function(){         
      // alert("Error")
	// });
	
	$http.get("http://applogic.in/Android/AjaxData/GetData.php")
	.then(function(resp){
		alert('Success->'+resp.data.length);
		for(var i=0;i<resp.data.length;i++){
			alert(resp.data[i].user_fullname);
		}
		prompt("",JSON.stringify(resp));		// JSON object
	}, function(err){
		alert('ERR->'+err);
	});
});
