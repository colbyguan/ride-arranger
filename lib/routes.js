Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('landing', {
    path: '/'
  });

  this.route('groupsList', {
    path: '/groups'
  });

  this.route('groupPage', {
    path: '/groups/:_id',
    data: function() {
      return Groups.findOne(this.params._id);
    }
  });

});

var requireLogin = function() {
  if (!Meteor.user()) {
    this.render('landing');
  } else {
    this.next();
  }
};

var goToList = function() {
  if (Meteor.user()) {
    Router.go('groupsList');
    this.next();
  }
};

Router.onBeforeAction(requireLogin, {except: ['landing', 'groupPage']});
Router.onBeforeAction(goToList, {only: ['landing']});