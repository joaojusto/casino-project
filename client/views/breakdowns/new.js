Template.newBreakdown.events = {
  'click #create': function(event) {
    event.preventDefault();
    createBreakdown();
  }
};

function createBreakdown() {
  var breakdown = {
    state: document.getElementById('state').checked,
     machineId: $('#machine').val(),
     description: $('#description').val()
  };

  if (!validateBreakdown(breakdown))
    return;

  Meteor.call('newBreakdown', breakdown);
}

function validateBreakdown(breakdown) {
  if (breakdown.machineId && breakdown.description)
    return true;

  if (!breakdown.machineId)
    Materialize.toast('Missing machine ID', 2000);

  if (!breakdown.description)
    Materialize.toast('Missing description', 2000);

  return false;
}
