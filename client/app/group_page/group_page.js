Template.groupPage.events({
  'click .add-driver': function(e) {
    $('.driver-form-container').slideDown();
    $('.passenger-form-container').slideUp();
    $('.new-driver-field').tooltip();
  },
  'click .driver-form-container .close-btn-container': function(e) {
    $('.driver-form-container').slideUp();
  },
  'click .new-driver-field': function(e) {
    $('.custom-fields-container').append('<div class="col-md-6 form-group"><input class="driver-custom-key form-control" type="text" placeholder="Field name"></div>\
      <div class="col-md-6 form-group"><input class="driver-custom-value form-control" type="text" placeholder="Field value"></div>');
  },
  'click .add-passenger': function(e) {
    $('.passenger-form-container').slideDown();
    $('.driver-form-container').slideUp();
  },
  'click .passenger-form-container .close-btn-container': function(e) {
    $('.passenger-form-container').slideUp();
  },
  'submit .new-driver-form': function(e) {
    console.log(this);
    e.preventDefault();
    var driver = {
      groupId: this._id,
      name: $(e.target).find('[name=driverName]').val(),
      seats: parseInt($(e.target).find('[name=driverSeats]').val()),
      customInfo: {
        make: $(e.target).find('[name=driverMake]').val(),
        model: $(e.target).find('[name=driverModel]').val(),
        color: $(e.target).find('[name=driverColor]').val()
      }
    };
    Meteor.call('driverInsert', driver, function(err, res) {
      if (err) {
        return alert(err.reason);
      } 
    });
  }
});

Template.groupPage.helpers({
  'drivers': function() {
    return Drivers.find({groupId: this._id});
  }
});