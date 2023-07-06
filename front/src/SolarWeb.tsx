import solarWebStyles, {
  aboutCompany,
  aboutGame,
  aboutGameLabel,
  backgroundImage,
  gameListBackground,
  issueNumber,
} from "./solarWeb.module.css";
import { useState } from "preact/hooks";
import { PopupWindow, PopupWindowOptions } from "./PopupWindow";
import { h } from "preact";
import gamesList from "./gamesList";

export default function SolarWeb() {
  const [popupOptions, setPopupOptions] = useState<PopupWindowOptions>();

  return (
    <div>
      <div class={solarWebStyles.pageTitle}>
        <div>SolarWeb</div>
        <div>Games</div>
        <div class={solarWebStyles.price}>
          <div>10₵</div>
        </div>
        <div class={issueNumber}>
          <div>No. {Math.round(Math.random() * 300 + 100)}</div>
          <div>
            {new Date(Math.round(Math.random() * 50 + 1900), Math.round(Math.random() * 7)).toLocaleDateString(
              "en-US",
              {
                month: "short",
                year: "numeric",
              }
            )}
          </div>
        </div>
        <div class={aboutCompany}>About</div>
      </div>
      <div class={solarWebStyles.about}>
        {Object.keys(gamesList).map(x => <div
          class={`${aboutGame}`}
          onClick={() => {
            setPopupOptions({
              content: gamesList[x],
              label: x,
              close: () => setPopupOptions(undefined),
            });
          }}
        >
          <img class={gameListBackground} src={`/img/${gamesList[x].listingBackground}`} />
          <div class={aboutGameLabel}>{x}</div>
        </div>)}
        
        {popupOptions && <PopupWindow options={popupOptions} />}
      </div>
      <div class={backgroundImage}></div>
    </div>
  );
}
