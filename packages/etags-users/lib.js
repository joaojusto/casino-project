Meteor.methods({
  'user:update': update
});

function update(userId, targetId, user, callback) {
  if (validate(userId, targetId, callback))
    Meteor.users.update(targetId, {$set: user}, callback);
  else
    return;
}

function validate(userId, targetId, callback) {
  if (targetId === userId || isAdmin(userId))
    return true;

  callback('Not allowed');
  return false;
}

function isAdmin(userId) {
  return Meteor.users.findOne({_id: userId}).username === 'admin';
}
