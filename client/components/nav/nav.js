Template.nav.onRendered(onRendered);

Template.nav.helpers({
  userId: Meteor.userId,

  username: function() {
    if (Meteor.user())
      return Meteor.user().username;
    else
      return "";
  }
});

function onRendered() {
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
}
