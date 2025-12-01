import { ThemeProvider } from "./components/ThemeProvider";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
