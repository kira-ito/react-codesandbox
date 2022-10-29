import { useCallback, useState } from "react";
import { App } from "./App";

export const Counter = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const onClickCountA = useCallback(() => {
    setCountA((prevcountA) => prevcountA + 1);
  }, [countA]);
  const onClickCountB = useCallback(() => {
    setCountB((prevcountB) => prevcountB + 1);
  }, [countB]);

  return (
    <>
      {/* <App text="Aボタン" countState={countA} /> */}
      {/* <App text="Bボタン" countState={countB} /> */}
      <p>A: {countA}</p>
      <p>B: {countB}</p>
      {/* <button onClick={onClickCountA}>Aボタン</button> */}
      {/* <button onClick={onClickCountB}>Bボタン</button> */}
      <App countState={onClickCountA} text="Aボタン" />
      <App countState={onClickCountB} text="Bボタン" />
    </>
  );
};
