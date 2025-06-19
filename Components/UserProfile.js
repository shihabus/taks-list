import { Events } from "../Constants/Events.js";
import "./user-profile.style.css";

export class UserProfile extends HTMLElement {
  constructor() {
    super();
  }

  renderProfile() {
    const profileData = app.store.profile;

    const name = this.querySelector("h2");
    name.textContent = profileData.name;

    const profilePic = this.querySelector("img");
    profilePic.src = profileData.photo;
    profilePic.setAttribute("alt", `profile picture of ${profileData.name}`);
  }

  connectedCallback() {
    const rootElm = document.getElementById("user-profile-template");
    const content = rootElm.content.cloneNode(true);

    this.appendChild(content);

    window.addEventListener(Events.PROFILE_UPDATED, () => {
      this.renderProfile();
    });
  }
}

customElements.define("user-profile", UserProfile);
