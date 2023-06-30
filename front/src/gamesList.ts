import { VNode } from "preact";
import BeyondBlueSkies from "./games/BeyondBlueSkies";

export interface GameOptions {
  render: VNode | (() => VNode);
  listingBackground: string;
}

const gamesList: { [name: string]: GameOptions } = {
  "Beyond Blue Skies": { render: BeyondBlueSkies, listingBackground: "spaceships.jpg" },
};

export default gamesList;
