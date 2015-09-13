Template.header.events({
  'click .logout': function(e) {
    Meteor.logout();
    Router.go('landing');
  }
});
