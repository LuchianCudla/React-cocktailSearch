import ReactDOM from "react-dom";
import { AppProvider } from "./context/context";
import App from "./components/App";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
