Template.breakdown.events = {
  'click #delete': function(event, template) {
    event.preventDefault();

    Meteor.call('breakdown:remove', template.data._id, onSuccess);
  }
};

function onSuccess(error) {
  if (error)
    return handleError(error);

  Toast.makeToast('Breakdown deleted sucessfully');
  Router.go('home');
}

function handleError(error) {
  if (error.name.length)
    error.name.forEach(makeToast);
  else
    Toast.makeToast('Something went wrong while deleting this breakdown');
}
