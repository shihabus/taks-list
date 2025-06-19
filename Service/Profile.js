import { URL } from "../Constants/URL";

export async function fetchProfile() {
  try {
    const resp = await fetch(URL.profile);
    app.store.profile = await resp.json();
  } catch (error) {
    console.error("Unable to fetch profile");
  }
}
