import { VNode, h } from "preact";
import { closeButton, komika, popupWindow, title } from "./common.module.css";
import { useEffect } from "preact/hooks";
import { GameOptions } from "./gamesList";

export interface PopupWindowOptions {
  label: string;
  content: GameOptions;
  close: Function;
}

export function PopupWindow(props: { options: PopupWindowOptions }) {
  useEffect(() => {
    const closeWindow = (event: MouseEvent) => {
      event.stopPropagation();
      props.options.close();
    };

    document.addEventListener("click", closeWindow);

    return () => {
      document.removeEventListener("click", closeWindow);
    };
  }, []);

  return (
    <div
      class={popupWindow}
      onClick={(event) => {
        event.stopPropagation();
        props.options.close();
      }}
    >
      <div class={closeButton} />
      <div class={`${komika} ${title}`}>{props.options.label}</div>
      {typeof props.options.content.render === "function"
        ? props.options.content.render()
        : props.options.content.render}
    </div>
  );
}
