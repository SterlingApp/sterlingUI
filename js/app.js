// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
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
  
  .state('app.cartrade', {
      url: '/cartrade',
      views: {
        'menuContent': {
          templateUrl: 'templates/cartrade.html',
          controller: 'CartradeCtrl'
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
 
    .state('app.taxyear', {
      url: '/taxyear',
      views: {
        'menuContent': {
          templateUrl: 'templates/taxyear.html',
		  controller: 'TaxyearCtrl'
        }
      }
    });
   

 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
