Meteor.startup(startup);

function startup() {
  loadLanguage();
}

function getUserLanguage() {
  return "en";
}

function loadLanguage() {
  Session.set("showLoadingIndicator", true);

  function changeCompleted() {
    Session.set("showLoadingIndicator", false);
  }

  function changeFailed() {
    Session.set("showLoadingIndicator", false);
    console.log(error_message);
  }

  TAPi18n
    .setLanguage(getUserLanguage())
    .done(changeCompleted)
    .fail(changeFailed);
}
