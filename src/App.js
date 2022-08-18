import { useState } from "react";
import MainContainer from "./components/MainContainer";
import { SearchContext } from "./helper/Contexts";
function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <MainContainer />
    </SearchContext.Provider>
  );
}

export default App;
