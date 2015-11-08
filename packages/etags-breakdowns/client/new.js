Template.newBreakdown.events = {
  'click #create': function(event) {
    event.preventDefault();

    var breakdown = {
      state: document.getElementById('state').checked,
      machineId: $('#machine').val(),
      description: $('#description').val()
    };

    Meteor.call('breakdown:new', breakdown, onSuccess);
  }
};

function onSuccess(error) {
  if (error)
    return handleError(error);

  Toast.makeToast('Breakdown created sucessfully');
  Router.go('home');
}

function handleError(error) {
  if (error.name.length)
    error.name.forEach(Toast.makeToast);
  else
    Toast.makeToast('Something went wrong while updating this breakdown');
}
