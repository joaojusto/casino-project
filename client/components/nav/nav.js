Template.nav.onRendered(onRendered);

Template.nav.helpers({
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
