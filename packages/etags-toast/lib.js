Toast = Toast || {};

Toast.makeToast = make;

var defaultDuration = 2000;

function make(string, duration) {
  duration = duration || defaultDuration;
  Materialize.toast(string, duration);
}
