Groups = new Mongo.Collection('groups');
Drivers = new Mongo.Collection('drivers');
Passengers = new Mongo.Collection('passengers');

Meteor.methods({
  driverInsert: function(driver) {
    check(driver, {
      groupId: String,
      name: String,
      seats: Match.Integer,
      customInfo: Match.Optional(Object)
    });

    Drivers.insert(driver);
  },
  passengerInsert: function(passenger) {
    check(passenger, {
      groupId: String,
      name: String,
      preferences: Array
    });

    Passengers.insert(passenger);
  }
})