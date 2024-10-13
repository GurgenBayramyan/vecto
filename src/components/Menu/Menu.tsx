import { useDispatch } from "react-redux";
import user from "../../assets/userimg.png";
import { setBg } from "../../store/slices/effectSlice/effectSlice";
import { listData, menuItem } from "./constant";
import styles from "./Menu.module.scss";

const Menu = () => {
    const dispatch = useDispatch();

    return (
        <div
            className={styles.Menu}
            onMouseEnter={() => dispatch(setBg(true))}
            onMouseLeave={() => dispatch(setBg(true))}
        >
            <div className={styles.menuTop}>
                <div className={styles.user}>
                    <img src={user} />
                    <p>Gurgen</p>
                </div>
                <ul>
                    {listData.map((item) => (
                        <li key={item.id}>
                            <img src={item.icon} alt="alt" />
                            <p>{item.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.menuBottom}>
                {menuItem.map((item) => (
                    <p key={item.id}>{item.label}</p>
                ))}
            </div>
        </div>
    );
};

export default Menu;
