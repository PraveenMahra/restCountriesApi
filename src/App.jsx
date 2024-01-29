import CountryList from "./components/Api";
import { DarkModeProvider } from "./components/DarkModeContext";
import GlobalStyles from "./components/GlobalStyles";

import Header from "./components/Header";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Header />
      <CountryList />
    </DarkModeProvider>
  );
}

export default App;
