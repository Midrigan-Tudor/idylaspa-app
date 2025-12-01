import { LanguageProvider } from "./components/LanguageProvider";
import { ThemeProvider } from "./components/ThemeProvider";
import Routes from "./routes";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
