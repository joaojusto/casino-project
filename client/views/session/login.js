Template.login.events = {
  'click #signIn': function(event) {
    event.preventDefault();

    var userName = $('#userName').val();
    var password = $('#password').val();

    Meteor.loginWithPassword(userName, password, function(error) {
      if (error)
        Materialize.toast('Wrong user name or password', 2000);
    });
  }
};
