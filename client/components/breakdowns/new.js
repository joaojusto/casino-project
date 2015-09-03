Template.newBreakdown.events = {
  'click #create': function(event) {
    event.preventDefault();

    var breakdown = {
      state: document.getElementById('state').checked,
      machineId: $('#machine').val(),
      description: $('#description').val()
    };

    Breakdowns.helpers.createBreakdown(breakdown, onSuccess);
  }
};

function onSuccess(error) {
  if (error)
    return handleError(error);

  makeToast('Breakdown created sucessfully');
  Router.go('home');
}

function handleError(error) {
  if (error.name.length)
    error.name.forEach(makeToast);
  else
    makeToast('Something went wrong while updating this breakdown');
}

function makeToast(string) {
  Materialize.toast(string, 2000);
}
