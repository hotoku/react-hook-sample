import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <p>
          <a href="https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks">
            Reactのドキュメント
          </a>
          の写経。custom hookの練習。
        </p>
        <p>
          Reactの関数コンポーネントは、propsを入力として、純粋な関数としてDOMノードを返す、というのが基本。
          基本ではあるが、現実にはサーバーにデータを取りに行く・ユーザーからの入力を受け付けるなど副作用が必要。
          hookは、状態を持つ・副作用を起こすためにある。組み込みのhookで最低限のことはできるが、実際のアプリでは、より複雑なロジックが必要になる。
          これらをまとめて見通しよくするために、ユーザー定義のhook=custom
          hookを使うことになる。
          一つの考え方として、useEffectを使う場面で、それをcustom
          hookに括り出せないか？と考えるのが良さそう。
        </p>
      </div>
      <App />
    </div>
    .
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
