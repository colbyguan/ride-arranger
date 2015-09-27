Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.render('landing');
}, {name: 'landing'});
Router.route('/groupsList', { name: 'groupsList' });
Router.route('/groups/:_id', { name: 'groupPage', data: function() { return Groups.findOne(this.params._id)} });

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
  }
  this.next();
};

Router.onBeforeAction(requireLogin, {except: ['landing', 'groupPage']});
Router.onBeforeAction(goToList, {only: ['landing']});