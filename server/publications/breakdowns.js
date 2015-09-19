Meteor.publish('breakdowns', function(userId) {
  if (isAdmin(userId))
    return Breakdowns.find();
  else
    return Breakdowns.find({ author: this.userId });
});

function isAdmin(userId) {
  return currentUser(userId).username === 'admin';
}

function currentUser(userId) {
  return Meteor.users.findOne({ _id: userId });
}
