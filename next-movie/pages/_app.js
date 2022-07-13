import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";

import { Provider } from "react-redux";
import { store } from "../store";
import { ModalProvider } from "../providers/ModalProvider";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </Provider>
  );
}

export default MyApp;
