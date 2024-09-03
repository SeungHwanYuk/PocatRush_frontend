import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const GuideContext = createContext();
function GuideWrapper() {
  const [value, setValue] = useState("");
  return (
    <>
      <GuideContext.Provider value={{ value, setValue }}>
        <Outlet></Outlet>
      </GuideContext.Provider>
    </>
  );
}
export default GuideWrapper;
