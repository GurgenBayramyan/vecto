import { useDispatch } from "react-redux";
import homeLogo from "../../assets/icons/Group 46.png";
import watchLaterLogo from "../../assets/icons/Group 47.png";
import genresLogo from "../../assets/icons/Group 53.png";
import moviesLogo from "../../assets/icons/Group 54.png";
import tvShowsLogo from "../../assets/icons/Group 56.png";
import searchLogo from "../../assets/icons/ICON - Search.png";
import userImg from "../../assets/userimg.png";
import { setOpacityBg } from "../../store/slices/effectSlice";
import styles from "./Menu.module.scss";

const Menu = () => {
  const dispatch = useDispatch();

  const handleOpacityBg = (bool: boolean) => {
    dispatch(setOpacityBg(bool));
  };
  return (
    <div
      className={styles.Menu}
      onMouseEnter={() => handleOpacityBg(true)}
      onMouseLeave={() => handleOpacityBg(false)}
    >
      <div className={styles.menuTop}>
        <div className={styles.user}>
          <img src={userImg} />
          <p>Daniel</p>
        </div>
        <ul>
          <li>
            <img src={searchLogo} />
            <p>Search</p>
          </li>
          <li className={styles.active}>
            <img src={homeLogo} />
            <p>Home</p>
          </li>
          <li>
            <img src={tvShowsLogo} />
            <p>TV Shows</p>
          </li>
          <li>
            <img src={moviesLogo} />
            <p>Movies</p>
          </li>
          <li>
            <img src={genresLogo} />
            <p>Genres</p>
          </li>
          <li>
            <img src={watchLaterLogo} />
            <p>Watch Later</p>
          </li>
        </ul>
      </div>
      <div className={styles.menuBottom}>
        <p>LANGUAGE</p>
        <p>GET HELP</p>
        <p>EXIT</p>
      </div>
    </div>
  );
};

export default Menu;
