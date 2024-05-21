import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/globals.css";
import "../styles/style.css";
import Menu from "./Menu"
import PopularReports from "./PopularReports"
import Footer from "./Footer"


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Menu />
      <PopularReports />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
