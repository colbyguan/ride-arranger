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
    $('.custom-fields-container').append('\
      <div class="custom-fields-pair">\
        <div class="col-md-6 form-group"><input name="fieldName" class="driver-custom-key form-control" type="text" placeholder="Field name"></div>\
        <div class="col-md-6 form-group"><input name="fieldValue" class="driver-custom-value form-control" type="text" placeholder="Field value"></div>\
        <div class="glyphicon glyphicon-remove"></span>\
      </div>');
  },
  'click .add-passenger': function(e) {
    $('.passenger-form-container').slideDown();
    $('.driver-form-container').slideUp();
  },
  'click .passenger-form-container .close-btn-container': function(e) {
    $('.passenger-form-container').slideUp();
  },
  'click .glyphicon-remove': function(e) {
    $(e.target).closest('.custom-fields-pair').remove();
  },
  'submit .new-driver-form': function(e) {
    var badCustomFields = false;
    var customInfo = {};
    e.preventDefault();

    $('.custom-fields-container').children('div').each(function() {
      var fieldName = $(this).find('[name=fieldName]').val();
      var fieldValue = $(this).find('[name=fieldValue]').val();

      if (fieldName.length == 0 || fieldValue.length == 0) {
        $('.driver-submit-error').text('Cannot have empty custom info').slideDown();
        badCustomFields = true;
      } else {
        customInfo[fieldName] = fieldValue;
      }
    });
    if (badCustomFields) return;

    _.extend(customInfo, {
      make: $(e.target).find('[name=driverMake]').val(),
      model: $(e.target).find('[name=driverModel]').val(),
      color: $(e.target).find('[name=driverColor]').val()
    });
    var driver = {
      groupId: this._id,
      name: $(e.target).find('[name=driverName]').val(),
      seats: parseInt($(e.target).find('[name=driverSeats]').val()),
      customInfo: customInfo
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