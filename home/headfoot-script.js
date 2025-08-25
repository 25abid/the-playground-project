function loadIncludes() {
  fetch('/partials/header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header').innerHTML = data);

  fetch('/partials/footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);
}

window.addEventListener('DOMContentLoaded', function() {
  const main = document.getElementById('main-content');
  if (main) {
    main.classList.add('fade-in');
  }
});