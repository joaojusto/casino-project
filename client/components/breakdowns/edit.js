Template.editBreakdown.events = {
  'click #save': function(event) {
    event.preventDefault();

    var breakdown = {
      state: document.getElementById('state').checked,
      machineId: $('#machine').val(),
      description: $('#description').val()
    };

    Breakdowns.helpers.editBreakdown(breakdown, this._id, onSuccess);
  }
};

function onSuccess(error) {
  if (error)
    return handleError(error);

  makeToast('Breakdown saved sucessfully');
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
