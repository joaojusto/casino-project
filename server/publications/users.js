Meteor.publish('userData', function(userId) {
  if (!userId)
    return;

  if (isAdmin(userId))
    return Meteor.users.find();
  else
    return Meteor.users.find({ _id: userId }, { fields: { 'fullname': 1} });
});

function isAdmin(userId) {
  return currentUser(userId).username === 'admin';
}

function currentUser(userId) {
  return Meteor.users.findOne({ _id: userId });
}
