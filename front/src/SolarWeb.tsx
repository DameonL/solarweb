import solarWebStyles, {
  aboutCompany,
  aboutGame,
  aboutGameLabel,
  backgroundImage,
  gameListBackground,
  issueNumber,
} from "./solarWeb.module.css";
import { useState } from "preact/hooks";
import { PopupWindow, PopupWindowContent } from "./PopupWindow";
import { h } from "preact";
import gamesList from "./gamesList";
import AboutCompany from "./AboutCompany";

export default function SolarWeb() {
  const [popupOptions, setPopupOptions] = useState<PopupWindowContent>();

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
        <div
          class={aboutCompany}
          onClick={() => {
            setPopupOptions({
              title: "About Us",
              render: AboutCompany,
            });
          }}
        >
          About
        </div>
      </div>
      <div class={solarWebStyles.about}>
        {gamesList.map((x) => (
          <div
            class={`${aboutGame}`}
            onClick={() => {
              setPopupOptions(x);
            }}
          >
            <img class={gameListBackground} src={`/img/${x.background}`} />
            <div class={aboutGameLabel}>{x.title}</div>
          </div>
        ))}

        {popupOptions && <PopupWindow options={{ close: () => setPopupOptions(undefined) }} content={popupOptions} />}
      </div>
      <div class={backgroundImage} />
    </div>
  );
}
