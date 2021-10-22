/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  /**
   * useEffectの第2引数の配列に片酢を指定すると、
   * その変数の値が変わった時だけuseEffect内の関数が実行される。
   * 空の配列を指定すると、初回のレンダリング1回だけ関数が実行される。
   */
  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p> (´◠ω◠`) </p>}
    </>
  );
};

export default App;
