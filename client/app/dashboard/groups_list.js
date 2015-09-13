Template.groupsList.helpers({
  groups: function() {
    return Groups.find({ownerId: Meteor.userId()});
  }
});

Template.groupsList.events({
  'click .new-group-btn': function(e) {
    $('#new-group-form').slideDown();
  },
  'click .close-btn-container': function(e) {
    $('#new-group-form').slideUp();
  }
});
