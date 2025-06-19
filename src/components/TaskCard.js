import "./task-card.style.css";

export class TaskCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const task = JSON.parse(this.dataset.task);

    const $rootTemplate = document.getElementById("task-card-template");
    const content = $rootTemplate.content.cloneNode(true);

    this.appendChild(content);

    const $taskItem = this.querySelector("li.task");
    $taskItem.setAttribute("data-task-id", task.id);

    const $dueDate = this.querySelector('input[name="task-due"]');
    $dueDate.value = task.date;

    const $isDone = this.querySelector('input[type="checkbox"]');
    $isDone.checked = task.is_done;

    const $description = this.querySelector("div.task__description > p");
    $description.textContent = task.description;
  }
}

customElements.define("task-card", TaskCard);
