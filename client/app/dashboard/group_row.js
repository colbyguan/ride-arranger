Template.groupRow.events({
  'click .row-link': function(e) {
    Router.go('groupPage', {_id: this._id});
  }
})