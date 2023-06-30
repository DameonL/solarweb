import { h, render } from "preact";
import SolarWeb from "./SolarWeb";

export default function renderSite() {
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
  render(<SolarWeb />, root);
}
