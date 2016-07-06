// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
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
        
        }
      }
    })
   .state('app.flexible', {
      url: '/flexible',
      views: {
        'menuContent': {
          templateUrl: 'templates/flexible.html'
        }
      }
    })
   .state('app.make', {
      url: '/make',
      views: {
        'menuContent': {
          templateUrl: 'templates/make.html',
            
        }
      }
    })
   .state('app.disbursement', {
      url: '/disbursement',
      views: {
        'menuContent': {
          templateUrl: 'templates/disbursement.html'
          
        }
      }
    })
     .state('app.activity', {
      url: '/activity',
      views: {
        'menuContent': {
          templateUrl: 'templates/activity.html'
          
        }
      }
    })
      .state('app.health', {
      url: '/health',
      views: {
        'menuContent': {
          templateUrl: 'templates/health.html'
          
        }
      }
    })
       .state('app.hsa', {
      url: '/hsa',
      views: {
        'menuContent': {
          templateUrl: 'templates/hsa.html'
          
        }
      }
    })
        .state('app.recent', {
      url: '/recent',
      views: {
        'menuContent': {
          templateUrl: 'templates/recent.html'
        }
      }
    })
         .state('app.recentdisburse', {
      url: '/recentdisburse',
      views: {
        'menuContent': {
          templateUrl: 'templates/recentdisburse.html'
        }
      }
    })
          .state('app.scheduledcontribute', {
      url: '/scheduledcontribute',
      views: {
        'menuContent': {
          templateUrl: 'templates/scheduledcontribute.html'
        }
      }
    })
          .state('app.portfolio', {
      url: '/portfolio',
      views: {
        'menuContent': {
          templateUrl: 'templates/portfolio.html'
        }
      }
    })
           .state('app.information', {
    url: '/information',
    views: {
      'menuContent': {
        templateUrl: 'templates/information.html'
      }
    }
  })
  
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })
  
  
   .state('app.activitystmnt', {
    url: '/activitystmnt',
    views: {
      'menuContent': {
        templateUrl: 'templates/activitystmnt.html'
      }
    }
  })
   
    .state('app.availablebalance', {
    url: '/availablebalance',
    views: {
      'menuContent': {
        templateUrl: 'templates/availablebalance.html'
      }
    }
  })

.state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html'
      }
    }
  })


  .state('app.payme', {
      url: '/payme',
      views: {
        'menuContent': {
          templateUrl: 'templates/payme.html'
        }
      }
    })
  
  
   .state('app.newclaim', {
      url: '/newclaim',
      views: {
        'menuContent': {
          templateUrl: 'templates/newclaim.html'
        }
      }
    })
 
    .state('app.taxyear', {
      url: '/taxyear',
      views: {
        'menuContent': {
          templateUrl: 'templates/taxyear.html'
          //controller: 'PlaylistsCtrl'
        }
      }
    });
   

 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
