Meteor.publish('userData', function() {
  if (isAdmin(this.userId))
    return Meteor.users.find();
  else
    return Meteor.users.find({ _id: this.userId }, { fields: { 'fullname': 1} });
});

function isAdmin(userId) {
  return currentUser(userId).username === 'admin';
}

function currentUser(userId) {
  return Meteor.users.findOne({ _id: userId });
}
