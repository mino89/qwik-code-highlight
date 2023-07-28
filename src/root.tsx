import { CodeHighlighter } from "./components/code-highlighter/code-highlighter";
import { Counter } from "./components/counter/counter";
import { Logo } from "./components/logo/logo";

import 'highlight.js/styles/dark.css';

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Logo />
        <Counter />
        <CodeHighlighter 
        language="typescript"
        content={`
        function add(a: number, b: number) {
          return a + b;
        }`}
        />
             <CodeHighlighter 
        language="html"
        content={`
        <h1>test content</h1>`}
        />
      </body>
    </>
  );
};
