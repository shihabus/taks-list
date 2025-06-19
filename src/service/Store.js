import { Events } from "../constants/Events.js";

const store = {
  profile: null,
  tasks: [],
};

const proxiedStore = new Proxy(store, {
  set(target, property, value) {
    if (property === "tasks") {
      target[property] = value;

      window.dispatchEvent(new Event(Events.TASKS_UPDATED));
    }
    if (property === "profile") {
      target[property] = value;

      window.dispatchEvent(new Event(Events.PROFILE_UPDATED));
    }
    return true;
  },
});

export { proxiedStore as Store };
