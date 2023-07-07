import { h } from "preact";
import { PopupWindowContent } from "../PopupWindow";

const GreenMambaStealth: PopupWindowContent = {
  title: "Green Mamba",
  render: (
    <div>
      <div>Green Mamba Stealth is a robust and flexible stealth system for Unity.</div>
      <div>
        Whether your scene uses baked shadows, real-time lighting, or both. Green Mamba delivers an accurate rating that
        takes into account not just whether a shadow falls onto your player, but also how much shadow falls on them.
      </div>
      <div>Provide your players with unparalleled stealth realism for the ultimate immersive experience.</div>
      <div>
        <a href="https://github.com/DameonL/GreenMambaStealth" target="_blank">
          Grab the code from GitHub
        </a>
      </div>
    </div>
  ),
};

export default GreenMambaStealth;
