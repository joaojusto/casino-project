Meteor.methods({
  'workOrders:new': create,
  'workOrders:edit': edit,
  'workOrders:remove': remove
});

function create(workOrder, callback) {
  if (invalidWorkOrder(workOrder, callback))
    return;

  WorkOrders.insert(workOrder, callback);
}

function edit(workOrder, id, callback) {
  if (invalidWorkOrder(workOrder, callback))
    return;

  WorkOrders.update(id, {$set: breakdown}, callback);
}

function remove(workOrder, callback) {
  WorkOrders.remove({_id: breakdownId}, callback);
}

function invalidWorkOrder(workOrder, callback) {
  var error = { name: []};

  if (workOrder.machineId && workOrder.description)
    return false;

  if (!workOrder.machineId)
    error.name.push('Missing machine ID');

  if (!workOrder.description)
    error.name.push('Missing description');

  callback(error);

  return true;
}
