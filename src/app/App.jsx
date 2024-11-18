import { MainProvider } from "./providers";
import { AppRouter } from "./routers";
import "./ui/index.css";

function App() {
  return (
    <MainProvider>
      <AppRouter />
    </MainProvider>
  );
}

export default App;
