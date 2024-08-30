import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const DeviceContext = createContext();
function DeviceWrapper() {
  const [userId, setUserId] = useState("");
  return (
    <>
      <DeviceContext.Provider value={{ userId, setUserId }}>
        <Outlet />
      </DeviceContext.Provider>
    </>
  );
}
export default DeviceWrapper;
