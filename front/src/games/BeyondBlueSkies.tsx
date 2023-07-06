import { h } from "preact";
import { PopupWindowContent } from "../PopupWindow";

const bbsEntry: PopupWindowContent = {
  title: "Beyond Blue Skies",
  background: "spaceships.jpg",
  render: (
    <div>
      <div>Beyond Blue Skies is a mobile shmup with a unique blend of space-shooter action and RPG mechanics.</div>
      <div>Defeat villains, collect loot, power up your ship, and save the galaxy!</div>
      <div>Coming to Android and iOS 2024!</div>
    </div>
  ),
};

export default bbsEntry;
