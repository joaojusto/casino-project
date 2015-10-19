Meteor.methods({
  newBreakdown: create,
  editBreakdown: edit,
  removeBreakdown: remove
});

function create(breakdown, callback) {
  if (invalidBreakdown(breakdown, callback))
    return;

  Breakdowns.insert(breakdown, callback);
}

function edit(breakdown, id, callback) {
  if (invalidBreakdown(breakdown, callback))
    return;

  Breakdowns.update(id, {$set: breakdown}, callback);
}

function remove(breakdownId, callback) {
  Breakdowns.remove({_id: breakdownId}, callback);
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
