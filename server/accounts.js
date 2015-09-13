Accounts.onCreateUser(function(options, user) {
  var groupId = newGroup(options.email);
  user.groupIds = [groupId];
  if (options.profile) {
    user.profile = options.profile
  }
  return user;
});

var newGroup = function(ownerEmail) {
  var group = {
    ownerEmail: ownerEmail,
    created: new Date()
  }
  var groupId = Groups.insert(group);
  return groupId;
}