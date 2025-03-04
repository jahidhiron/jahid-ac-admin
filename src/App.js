import { ReactNotifications } from "react-notifications-component";
import "./App.css";
import Router from "./routes";

function App() {
  return (
    <div>
      <ReactNotifications />
      <Router />
    </div>
  );
}

export default App;
