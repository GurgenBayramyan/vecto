import React from "react";
import styles from "./App.module.scss";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { effectsSelector } from "../../store/selectors";

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
