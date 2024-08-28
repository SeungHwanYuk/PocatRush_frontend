import { useState } from "react";

export function UnlockMadal(data) {
  const [catImage, setCatImage] = useState(<h1>잠긴고양이</h1>);
  const [humanImage, setHumanImage] = useState(<h1>잠긴인간</h1>);
  const [uniconImage, setUniconImage] = useState(<h1>잠긴유니콘</h1>);
  const [tigerImage, setTigerImage] = useState(<h1>잠긴호랑이</h1>);

  if (data && data.data.level.levelId === "인간") {
    setHumanImage(
      <>
        <h1>열린인간</h1>
      </>
    );
  } else if (data && data.data.level.levelId === "고양이") {
    setHumanImage(
      <>
        <h1>열린인간</h1>
      </>
    );
    setCatImage(
      <>
        <h1>열린고양이</h1>
      </>
    );
  } else if (data && data.data.level.levelId === "호랑이") {
    setHumanImage(
      <>
        <h1>열린인간</h1>
      </>
    );
    setCatImage(
      <>
        <h1>열린고양이</h1>
      </>
    );
    setTigerImage(
      <>
        <h1>열린호랑이</h1>
      </>
    );
  } else if (data && data.data.level.levelId === "유니콘") {
    setHumanImage(
      <>
        <h1>열린인간</h1>
      </>
    );
    setCatImage(
      <>
        <h1>열린고양이</h1>
      </>
    );
    setTigerImage(
      <>
        <h1>열린호랑이</h1>
      </>
    );
    setUniconImage(
      <>
        <h1>열린유니콘</h1>
      </>
    );
  }
  return (
    <>
      {catImage}
      {uniconImage}
      {tigerImage}
      {humanImage}
    </>
  );
}
