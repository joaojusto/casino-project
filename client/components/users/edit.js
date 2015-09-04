Template.editUser.events = {
  'click #save': function(event) {
    event.preventDefault();

    console.log(this);
    saveUser();
  }
};

function saveUser() {
  var user = {
    username: ""
  };
}
