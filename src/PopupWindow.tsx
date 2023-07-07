import { VNode, h } from "preact";
import { closeButton, content, popupWindow, title, titleBar } from "./popupWindow.module.css";
import { komika } from "./common.module.css";
import { useEffect } from "preact/hooks";

export interface PopupWindowContent {
  title: string;
  background?: string;
  render: VNode | (() => VNode);
}

export interface PopupWindowOptions {
  close: Function;
}

export function PopupWindow(props: { content: PopupWindowContent; options: PopupWindowOptions }) {
  function closeWindow(event: MouseEvent) {
    if (document.activeElement !== document.body) return;

    event.stopPropagation();
    props.options.close();
  }

  useEffect(() => {
    document.body.addEventListener("click", closeWindow);

    return () => {
      document.body.removeEventListener("click", closeWindow);
    };
  }, []);

  return (
    <div
      class={popupWindow}
      onClick={closeWindow}
    >
      <div class={titleBar}>
        <div class={closeButton} />
        <div class={`${komika} ${title}`}>{props.content.title}</div>
      </div>
      <div class={content}>
        {typeof props.content.render === "function" ? props.content.render() : props.content.render}
      </div>
    </div>
  );
}
