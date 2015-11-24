Template.workOrdersList.helpers({
  workOrders: function() {
    return WorkOrders.find();
  }
})
