Template.editUser.events = {
  'click #save': function(event) {
    event.preventDefault();

    saveUser(this._id, {
      username: this.username,
      fullname: this.fullname,
      profile: this.profile,
      emails: this.emails
    });
  }
};

function saveUser(id, user) {
  user.username = $('#username').val();
  user.fullname = $('#fullname').val();

  Meteor.call('user:update', Meteor.userId(), id, user, onSuccess);
}

function onSuccess(error) {
  if (error)
    Toast.makeToast(error);
  else
    Toast.makeToast('Update success');
}
