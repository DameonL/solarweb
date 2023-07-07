import { h } from "preact";
import { useState } from "preact/hooks";
import AboutCompany from "./AboutCompany";
import { PopupWindow, PopupWindowContent } from "./PopupWindow";
import { komika } from "./common.module.css";
import gamesList from "./gamesList";
import ContactForm from "./other/ContactForm";
import {
  aboutGame,
  backgroundImage,
  comicSplashBox,
  gamesListContainer,
  issueNumber,
  pageTitle,
  price,
  title,
} from "./solarWeb.module.css";
import toolsList from "./toolsList";

export default function SolarWeb() {
  const [popupOptions, setPopupOptions] = useState<PopupWindowContent>();

  return (
    <div>
      <div class={pageTitle}>
        <div>SolarWeb</div>
        <div>Games</div>
        <div class={price}>
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
      </div>
      <div class={`${gamesListContainer} ${komika} ${comicSplashBox}`}>
        <div class={title}>In this issue:</div>
        <div>Games!</div>
        {gamesList.map((x) => (
          <div
            class={`${aboutGame}`}
            onClick={() => {
              setPopupOptions(x);
            }}
          >
            <div>{x.title}</div>
          </div>
        ))}
        <div>Tools!</div>
        {toolsList.map((x) => (
          <div
            class={`${aboutGame}`}
            onClick={() => {
              setPopupOptions(x);
            }}
          >
            <div>{x.title}</div>
          </div>
        ))}
        <div>More!</div>
        <div
          class={`${aboutGame}`}
          onClick={() => {
            setPopupOptions({
              title: "About Us",
              render: AboutCompany,
            });
          }}
        >
          About
        </div>
        <div
          class={`${aboutGame}`}
          onClick={() => {
            setPopupOptions(ContactForm);
          }}
        >
          Contact
        </div>
      </div>
      {popupOptions && <PopupWindow options={{ close: () => setPopupOptions(undefined) }} content={popupOptions} />}

      <div class={backgroundImage} />
    </div>
  );
}
