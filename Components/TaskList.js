import "./task-list.style.css";
import { Events } from "../Constants/Events.js";

export class TaskList extends HTMLElement {
  constructor() {
    super();
  }

  renderTasks(rootElm, tasks) {
    rootElm.innerHTML = "";

    if (tasks?.length == 0) {
      const title = document.createElement("h4");
      title.textContent = "No tasks available";
      rootElm.appendChild(title);
      return;
    }

    for (let task of tasks || []) {
      const $taskCard = document.createElement("task-card");
      $taskCard.setAttribute("data-task", JSON.stringify(task));
      rootElm.appendChild($taskCard);
    }
  }

  attachEventListener(rootElm) {
    rootElm.addEventListener("click", function (event) {
      event.stopPropagation();

      const isDoneTriggered = event.target.closest("button#done");
      const isDeleteTriggered = event.target.closest("button#remove");

      if (isDoneTriggered) {
        const taskCard = isDoneTriggered.parentNode.parentNode.parentNode;
        const selectedTaskId = taskCard.getAttribute("data-task-id");

        const updatedTasks = app.store.tasks?.map((task) => {
          if (task.id === selectedTaskId) {
            task.is_done = !task.is_done;
          }
          return task;
        });

        app.store.tasks = updatedTasks;
      }

      if (isDeleteTriggered) {
        const taskCard = isDeleteTriggered.parentNode.parentNode.parentNode;
        const selectedTaskId = taskCard.getAttribute("data-task-id");

        const updatedTask = app.store.tasks?.filter((task) => {
          return task.id != selectedTaskId;
        });

        app.store.tasks = updatedTask;
      }
    });
  }

  async connectedCallback() {
    const $rootTemplate = document.getElementById("task-list-template");
    const content = $rootTemplate.content.cloneNode(true);
    this.appendChild(content);

    const list = this.querySelector("ul");

    window.addEventListener(Events.TASKS_UPDATED, () => {
      if (app.store?.tasks) {
        this.renderTasks(list, app.store?.tasks);
      }
    });

    this.attachEventListener(list);
  }
}

customElements.define("task-list", TaskList);
