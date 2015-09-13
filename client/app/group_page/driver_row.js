Template.driverRow.helpers({
  carAndDriver: function() {
    var prefix = this.name + '\'s '
    var suffix;
    // dumb logic
    if (this.customInfo) {
      var make = this.customInfo.make;
      var model = this.customInfo.model;
      if (make && model) {
        suffix = make + ' ' + model;
      } else if (make) {
        suffix = make;
      } else if (model) {
        suffix = model;
      } else {
        suffix = 'car';
      }
    } else {
      suffix = 'car';
    }
    return prefix + suffix;
  }
});
