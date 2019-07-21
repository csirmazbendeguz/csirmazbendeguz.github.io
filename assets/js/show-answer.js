document.addEventListener('DOMContentLoaded', function() {
  var showAnswer = document.getElementById('show-answer');
  var answer = document.getElementById('answer');

  showAnswer.onclick = function(event) {
    event.preventDefault();
    showAnswer.style.display = 'none';
    answer.style.display = 'flex';
    return false;
  };
});
