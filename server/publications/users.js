Meteor.publish('users', function() {
  if (isAdmin(this.userId))
    return Meteor.users.find();
  else
    return [];
});
