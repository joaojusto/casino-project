Breakdowns = new Mongo.Collection('breakdowns');

Meteor.methods({
  newBreakdown: create
});

function create(breakdown) {
  Breakdowns.insert(breakdown, onError);
}

function onError(error) {
  if (error && Meteor.isClient)
    Materialize.toast('Something went wrong while creating a new breakdown', 2000);

  if (!error && Meteor.isClient)
    Materialize.toast('Breakdown created sucessfully', 2000);
}
