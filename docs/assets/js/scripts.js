const posts = [
  { title: "IAM Role Conflicts ‑ Quick Fix", category: "IAM", link: "posts/iam-issue-1.html" },
  { title: ".NET Dependency Injection Tricks", category: ".NET", link: "posts/dotnet-guide-1.html" },
  { title: "GitHub Pro Tips", category: "GitHub", link: "posts/github-tips.html" }
];

function renderPosts(containerId) {
  const c = document.getElementById(containerId);
  if (!c) return;
  posts.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-3";
    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">Category: ${p.category}</p>
          <a href="${p.link}" class="btn btn-primary mt-auto">Read More</a>
        </div>
      </div>`;
    c.appendChild(col);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPosts("postList");
  renderPosts("allPosts");
});
