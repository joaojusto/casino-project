Template.login.events = {
  'click #signIn': function(event) {
    event.preventDefault();
    logIn();
  },

  'keypress #userName': keypressForm,

  'keypress #password': keypressForm
};

function keypressForm(event) {
  if (event.which !== 13)
    return;

  event.preventDefault();
  logIn();
}

function logIn() {
  var userName = $('#userName').val();
  var password = $('#password').val();

  Meteor.loginWithPassword(userName, password, function(error) {
    if (error)
      Materialize.toast('Wrong user name or password', 2000);
    else
      Router.go('home');
  });
}
