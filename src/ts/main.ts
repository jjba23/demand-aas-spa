import home from "./views/home.ts";
import about from "./views/about.ts";

const routes: Record<string, {title: string, render: any}> = {
  "/": { title: "Home", render: home },
  "/about": { title: "About", render: about }
};

function router() {
  let view = routes[location.pathname];

  if (view) {
    document.title = view.title;
    let app = document.getElementById("app")
    if(app) { app.innerHTML = view.render(); }
  } else {
    history.replaceState("", "", "/");
    router();
  }
};

// Handle navigation
window.addEventListener("click", e => {
  if(e.target){
    // @ts-ignore
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      // @ts-ignore
      history.pushState("", "", e.target.href);
      router();
    }
  }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
