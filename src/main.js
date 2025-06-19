import { TaskCard } from "./components/TaskCard.js";
import { TaskList } from "./components/TaskList.js";
import { UserProfile } from "./components/UserProfile.js";

import { fetchProfile } from "./service/Profile.js";
import { Store } from "./service/Store.js";
import { fetchTasks } from "./service/Tasks.js";

async function init() {
  window.app.store = Store;

  if (!app.store.tasks?.length) {
    fetchTasks();
  }
  if (!app.store.profile) {
    fetchProfile();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  init();

  const $form = document.querySelector("form");

  $form.addEventListener("submit", function (event) {
    event.preventDefault();

    // TODO
  });
});
