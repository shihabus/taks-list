import { UserProfile } from "../Components/UserProfile.js";
import { TaskCard } from "../Components/TaskCard.js";
import { TaskList } from "../Components/TaskList.js";

import { fetchProfile } from "../Service/Profile.js";
import { Store } from "../Service/Store.js";
import { fetchTasks } from "../Service/Tasks.js";

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
