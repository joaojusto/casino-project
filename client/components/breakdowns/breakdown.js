Template.breakdown.events = {
  'click #delete': function(event) {
    event.preventDefault();

    Breakdowns.helpers.removeBreakdown(this._id, onSuccess);
  }
};

function onSuccess(error) {
  if (error)
    return handleError(error);

  makeToast('Breakdown deleted sucessfully');
  Router.go('home');
}

function handleError(error) {
  if (error.name.length)
    error.name.forEach(makeToast);
  else
    makeToast('Something went wrong while deleting this breakdown');
}

function makeToast(string) {
  Materialize.toast(string, 2000);
}
