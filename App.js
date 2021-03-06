import Main from './Main';
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App(props) {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}


