document.addEventListener('DOMContentLoaded', function() {
  var currentYear = new Date().getFullYear();
  var elements = document.getElementsByClassName('current-year');

  for (var i = 0; i < elements.length; ++i) {
    elements[i].innerHTML = currentYear;
  }
});
