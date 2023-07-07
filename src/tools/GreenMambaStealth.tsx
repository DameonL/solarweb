import { h } from "preact";
import { PopupWindowContent } from "../PopupWindow";

const GreenMambaStealth: PopupWindowContent = {
  title: "Green Mamba",
  render: (
    <div>
      <div>Green Mamba Stealth is a powerful open source stealth system for Unity.</div>
      <div>
        With real-time analysis of both baked and dynamic shadows affecting a character, Green Mamba is able to deliver
        an accurate rating indicating how visible a character is. Green Mamba is sensitive to take into account both the
        darkness of the shadows, but how much of the player is in the shadow.
      </div>
      <div>
        <a href="https://github.com/DameonL/GreenMambaStealth" target="_blank">
          Grab the code from GitHub
        </a>
      </div>
    </div>
  ),
};

export default GreenMambaStealth;
