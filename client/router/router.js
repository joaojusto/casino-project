var configs = {
  layoutTemplate: 'mainLayout'
};

var beforeHooks = {
  isLoggedIn: isLoggedIn
};

Router.configure(configs);
Router.onBeforeAction(beforeHooks.isLoggedIn, { except: ['login'] });

function isLoggedIn() {
  if (!Meteor.userId())
    this.render('login');
  else
    this.next();
}

Router.map(function setUpRoutes() {
  this.route('login', {
    path: '/login'
  });

  this.route('logout', {
    action: function() {
      Meteor.logout(function(error) {
        if (!error)
          Router.go('login');
      });
    }
  });

  this.route('home', {
    path: '/',
    subscriptions: function() {
      Meteor.subscribe('userData');
      Meteor.subscribe('breakdowns');
    }
  });

  this.route('new_breakdown', {
    path: '/breakdowns/new'
  });

  this.route('edit_breakdown', {
    path: '/breakdowns/:id',
    subscriptions: function() {
      Meteor.subscribe('breakdowns');
    },
    data: function() {
      return Breakdowns.findOne({_id: this.params.id});
    }
  });

  this.route('new_workOrder', {
    path: '/workorders/new'
  });

  this.route('users', {
    path: '/users',
    subscriptions: function() {
      Meteor.subscribe('userData');
    }
  });

  this.route('new_user', {
    path: '/users/new',
    subscriptions: function() {
      Meteor.subscribe('userData');
    }
  });

  this.route('edit_user', {
    path: '/users/:id',
    subscriptions: function() {
      Meteor.subscribe('userData');
    },
    data: function() {
      return Meteor.users.findOne({_id: this.params.id});
    }
  });
});
