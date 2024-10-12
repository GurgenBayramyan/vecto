import { useOpacityBg } from "../../store/selectors";
import Home from "../Main/Main";
import Menu from "../Menu/Menu";
import styles from "./App.module.scss";

function App() {
    const isShowOpacityBg = useOpacityBg();

    return (
        <div className={styles.App}>
            {isShowOpacityBg && <div className={styles.opacityBg}></div>}
            <Menu />
            <Home />
        </div>
    );
}

export default App;
