function loadIncludes() {
  fetch('/partials/header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header').innerHTML = data);

  fetch('/partials/footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);
}

function fadeToPage(event, url) {
  event.preventDefault();
  document.body.classList.add('fade-out');
  setTimeout(function() {
    window.location.href = url;
  }, 400);
}

window.onload = function() {
  document.body.classList.add('fade-in');
};