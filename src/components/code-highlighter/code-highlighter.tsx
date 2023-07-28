import { Slot, component$, useVisibleTask$ } from "@builder.io/qwik";

import hljs from "highlight.js";


interface CodeHighlighterProps {
  language?: string;
  content?: string;
}


export const CodeHighlighter = component$((props: CodeHighlighterProps) => {
  useVisibleTask$(() => {
    hljs.highlightAll();
  })
  return (
    <>
      {props.language &&
        <pre>
          <code class={props.language}>
            {props.content}
          </code>
        </pre>
      }
    </>
  )
})