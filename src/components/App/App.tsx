import { useSelector } from "react-redux";
import { effectsSelector } from "../../store/selectors";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import styles from "./App.module.scss";

function App() {
  const { showOpacityBg } = useSelector(effectsSelector);

  return (
    <div className={styles.App}>
      <Menu />
      {showOpacityBg && <div className={styles.opacityBg}></div>}
      <Home />
    </div>
  );
}

export default App;
