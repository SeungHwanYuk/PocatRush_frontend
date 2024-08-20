import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const BoardContext = createContext();
function BoardWrapper() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <BoardContext.Provider value={{ searchText, setSearchText }}>
        <Outlet />
      </BoardContext.Provider>
    </>
  );
}
export default BoardWrapper;
