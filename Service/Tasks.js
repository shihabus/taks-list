import { URL } from "../Constants/URL";

export async function fetchTasks() {
  try {
    const resp = await fetch(URL.tasks);
    const { tasks } = await resp.json();
    app.store.tasks = tasks;
  } catch (error) {
    console.error("Unable to fetch tasks");
  }
}
