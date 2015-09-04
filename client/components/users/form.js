Template.userForm.helpers({
  isValid: function(obj) {
    if (obj && obj.hash && obj.hash.value)
      return 'valid';
    else
      return;
  },

  isActive: function(obj) {
    if (obj && obj.hash && obj.hash.value)
      return 'active';
    else
      return;
  }
});
