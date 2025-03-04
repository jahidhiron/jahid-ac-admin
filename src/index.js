// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter as Router } from "react-router-dom";
// import "@mantine/core/styles.css";
// import { MantineProvider } from "@mantine/core";
// import { Bounce, ToastContainer } from "react-toastify";
// import "/node_modules/flag-icons/css/flag-icons.min.css";
//
// import "@mantine/dates/styles.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <MantineProvider>
//       <Router>
//         <App />
//         <ToastContainer
//           position='bottom-right'
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick={false}
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme='dark'
//           transition={Bounce}
//         />
//       </Router>
//     </MantineProvider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { persistStore } from "redux-persist";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "react-quill/dist/quill.snow.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import HistoryRouter from "./stores/services/historyRouter";
import configureStore from "./stores";
import AuthProvider from "./components/contexts/AuthContext";

const { store } = configureStore();
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MantineProvider>
            <Router>
              <HistoryRouter />
              <AuthProvider>
                <App />
              </AuthProvider>
            </Router>
          </MantineProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
