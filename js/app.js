angular.module('starter', ['ionic', 'ngCordova','starter.controllers'])

.run(function($ionicPlatform,$cordovaDevice,$cordovaPush,$state,$cordovaDialogs) {
  $ionicPlatform.ready(function($scope,$location,$state) {
	  
    $ionicPlatform.registerBackButtonAction(function(event) {
		if (true) {
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
                 
			}
		}, 100);
		
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  
  
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
	controller: 'LoginCtrl'
  })
  
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

   .state('app.portfolio', {
      url: '/portfolio',
      views: {
        'menuContent': {
          templateUrl: 'templates/portfolio.html',
		  controller: 'PortfolioCtrl'
        }
      }
    })
  
  .state('app.contribution', {
      url: '/contribution',
      views: {
        'menuContent': {
          templateUrl: 'templates/contribution.html',
          controller: 'ContributionCtrl'
        }
      }
    })
   .state('app.flexible', {
      url: '/flexible',
      views: {
        'menuContent': {
          templateUrl: 'templates/flexible.html',
		  controller: 'FlexibleCtrl'
        }
      }
    })
   .state('app.make', {
      url: '/make',
      views: {
        'menuContent': {
          templateUrl: 'templates/make.html',
          controller: 'MakeCtrl'  
        }
      }
    })
   .state('app.disbursement', {
      url: '/disbursement',
      views: {
        'menuContent': {
          templateUrl: 'templates/disbursement.html',
          controller: 'DisbursementCtrl' 
        }
      }
    })
     .state('app.activity', {
      url: '/activity',
      views: {
        'menuContent': {
          templateUrl: 'templates/activity.html',
          controller: 'ActivityCtrl'
        }
      }
    })
      .state('app.health', {
      url: '/health',
      views: {
        'menuContent': {
          templateUrl: 'templates/health.html',
          controller: 'HealthCtrl'
        }
      }
    })
       .state('app.hsa', {
      url: '/hsa',
      views: {
        'menuContent': {
          templateUrl: 'templates/hsa.html',
          controller: 'HsaCtrl'
        }
      }
    })
        .state('app.recent', {
      url: '/recent',
      views: {
        'menuContent': {
          templateUrl: 'templates/recent.html',
		  controller: 'RecentCtrl'
        }
      }
    })
         .state('app.recentdisburse', {
      url: '/recentdisburse',
      views: {
        'menuContent': {
          templateUrl: 'templates/recentdisburse.html',
		  controller: 'RecentdisburseCtrl'
        }
      }
    })
          .state('app.scheduledcontribute', {
      url: '/scheduledcontribute',
      views: {
        'menuContent': {
          templateUrl: 'templates/scheduledcontribute.html',
		  controller: 'ScheduledcontributeCtrl'
        }
      }
    })
	
	 .state('app.scheduleddisbursement', {
      url: '/scheduleddisbursement',
      views: {
        'menuContent': {
          templateUrl: 'templates/scheduleddisbursement.html',
		  controller: 'ScheduledDisbursementCtrl'
        }
      }
    })
         
           .state('app.information', {
    url: '/information',
    views: {
      'menuContent': {
        templateUrl: 'templates/information.html',
		controller: 'InformationCtrl'
      }
    }
  })
  
  
   .state('app.activitystmnt', {
    url: '/activitystmnt',
    views: {
      'menuContent': {
        templateUrl: 'templates/activitystmnt.html',
		controller: 'ActivitystmntCtrl'
      }
    }
  })
   
    .state('app.availablebalance', {
    url: '/availablebalance',
    views: {
      'menuContent': {
        templateUrl: 'templates/availablebalance.html',
		controller: 'AvailablebalanceCtrl'
      }
    }
  })

.state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html',
		controller: 'AccountCtrl'
      }
    }
  })


  .state('app.payme', {
      url: '/payme',
      views: {
        'menuContent': {
          templateUrl: 'templates/payme.html',
		  controller: 'PaymeCtrl'
        }
      }
    })
  
  
   .state('app.newclaim', {
      url: '/newclaim',
      views: {
        'menuContent': {
          templateUrl: 'templates/newclaim.html',
		  controller: 'newclaimCtrl'
        }
      }
    })
    .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html',
		  controller: 'contactCtrl'
        }
      }
    })
 
 
    .state('app.taxyear', {
      url: '/taxyear',
      views: {
        'menuContent': {
          templateUrl: 'templates/taxyear.html',
		  controller: 'TaxyearCtrl'
        }
      }
    })
   .state('app.recentdis', {
      url: '/recentdis',
      views: {
        'menuContent': {
          templateUrl: 'templates/recentdisburse.html',
		  controller: 'RecentdisCtrl'
        }
      }
    })
   .state('app.recentcontribute', {
      url: '/recentcontribute',
      views: {
        'menuContent': {
          templateUrl: 'templates/recentcontribute.html',
		  controller: 'RecentcontributeCtrl'
        }
      }
    })
	
	.state('app.flexibleactivity', {
      url: '/flexibleactivity',
      views: {
        'menuContent': {
          templateUrl: 'templates/flexibleactivity.html',
		  controller: 'FlexibleactivityCtrl'
		 
        }
      }
  })
   
 .state('app.newclaimbicycle', {
      url: '/newclaimbicycle',
      views: {
        'menuContent': {
          templateUrl: 'templates/newclaimbicycle.html',
		  controller: 'NewclaimbicycleCtrl'
        }
      }
    })
 
 .state('app.new', {
      url: '/new',
      views: {
        'menuContent': {
          templateUrl: 'templates/new.html',
		  controller: 'NewCtrl'
        }
      }
    })
	
	.state('app.hsastatement', {
      url: '/hsastatement',
      views: {
        'menuContent': {
          templateUrl: 'templates/hsastatement.html',
		  controller: 'HsastatementCtrl'
        }
      }
    })
    
 .state('app.payprovider', {
      url: '/payprovider',
      views: {
        'menuContent': {
          templateUrl: 'templates/payprovider.html',
		  controller: 'PayproviderCtrl'
        }
      }
    });
  
 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
