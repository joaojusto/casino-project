Breakdowns = new Mongo.Collection('breakdowns');

Meteor.methods({
  newBreakdown: create,
  editBreakdown: edit,
  removeBreakdown: remove
});

function create(breakdown, callback) {
  Breakdowns.insert(breakdown, callback);
}

function edit(breakdown, id, callback) {
  Breakdowns.update(id, {$set: breakdown}, callback);
}

function remove(breakdownId, callback) {
  Breakdowns.remove({_id: breakdownId}, callback);
}

Breakdowns.helpers = {
  createBreakdown: createBreakdown,
  editBreakdown: editBreakdown,
  removeBreakdown: removeBreakdown
};

function createBreakdown(breakdown, callback) {
  if (invalidBreakdown(breakdown, callback))
    return;

  Meteor.call('newBreakdown', breakdown, callback);
}

function editBreakdown(breakdown, id, callback) {
  if (invalidBreakdown(breakdown, callback))
    return;

  Meteor.call('editBreakdown', breakdown, id, callback);
}

function removeBreakdown(id, callback) {
  Meteor.call('removeBreakdown', id, callback);
}

function invalidBreakdown(breakdown, callback) {
  var error = { name: []};

  if (breakdown.machineId && breakdown.description)
    return false;

  if (!breakdown.machineId)
    error.name.push('Missing machine ID');

  if (!breakdown.description)
    error.name.push('Missing description');

  callback(error);

  return true;
}
