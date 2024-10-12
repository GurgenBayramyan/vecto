import { convertSeconds } from "../../../../helpers/secondsConverter";
import { useAppDispatch } from "../../../../store";
import { useFeatured } from "../../../../store/selectors";
import {
    setInfoModal,
    setPlaying,
} from "../../../../store/slices/effectSlice/effectSlice";
import movieTitleImg from "../../../../assets/FeaturedTitleImage.png";
import styles from "./DetailsStyles.module.scss";

const Details = () => {
    const dispatch = useAppDispatch();
    const { Category, Date, MpaRating, Description, Duration } = useFeatured();

    return (
        <div className={styles.movieDetails}>
            <p className={styles.category}>{Category}</p>
            <img src={movieTitleImg} alt={Category} />
            <p className={styles.dateRatDur}>{`${Date.slice(
                0,
                4,
            )} ${MpaRating} ${convertSeconds(+Duration)}`}</p>
            <p className={styles.description}>{Description}</p>
            <div className={styles.btns}>
                <button
                    onClick={() => dispatch(setPlaying(true))}
                    className={styles.play}
                >
                    <i className="bx bx-play"></i> Play
                </button>
                <button
                    onClick={() => dispatch(setInfoModal(true))}
                    className={styles.info}
                >
                    More Info
                </button>
            </div>
        </div>
    );
};

export default Details;
