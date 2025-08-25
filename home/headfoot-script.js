function loadIncludes() {
  fetch('/partials/header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header').innerHTML = data);

  fetch('/partials/footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);
}

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("posts-list");
  if (list) loadPosts(list);
});

async function loadPosts(container) {
  try {
    // load from /blog/posts.json
    const res = await fetch("posts.json", { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const posts = await res.json();

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    container.innerHTML = posts.map(p => `
      <article class="post-card">
        <h3><a href="${p.file}">${p.title}</a></h3>
        <p class="date">${p.date}</p>
        <p>${p.teaser}</p>
      </article>
    `).join("");
  } catch (err) {
    console.error("loadPosts failed:", err);
    container.innerHTML = "<p>Couldn't load posts.</p>";
  }
}