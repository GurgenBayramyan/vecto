import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import movieTitleImg from "../../assets/FeaturedTitleImage.png";
import { convertSeconds } from "../../helpers/secondsConverter";
import { effectsSelector, moviesSelector } from "../../store/selectors";
import { setFeatured, setMovies } from "../../store/slices/moviesSlice";
import { IMovie } from "../../store/types";
import Trending from "../Trending/Trending";
import styles from "./Home.module.scss";
import { setVideoPlaying } from "../../store/slices/effectSlice";

const Home = () => {
  const { featured } = useSelector(moviesSelector);
  const { isVideoPlaying } = useSelector(effectsSelector);
  const dispatch = useDispatch();
  const fetchJson = () => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setMovies(data.TendingNow));
        if (sessionStorage.getItem("movieId")) {
          const id = sessionStorage.getItem("movieId");
          dispatch(
            setFeatured(
              data.TendingNow.find((movie: IMovie) => id === movie.Id)
            )
          );
        } else {
          dispatch(setFeatured(data.Featured));
        }
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  const playVideo = () => {
    dispatch(setVideoPlaying(true));
  };

  return (
    <div className={styles.Home}>
      <div className={styles.movieDetails}>
        <p className={styles.category}>{featured.Category}</p>
        <img src={movieTitleImg} alt={featured.Title} />
        <p className={styles.dateRatDur}>{`${featured.Date.slice(0, 4)} ${
          featured.MpaRating
        } ${convertSeconds(+featured.Duration)}`}</p>
        <p className={styles.description}>{featured.Description}</p>
        <div className={styles.btns}>
          <button onClick={playVideo} className={styles.play}>
            <i className="bx bx-play"></i> Play
          </button>
          <button className={styles.info}>More Info</button>
        </div>
      </div>
      <Trending />
      {isVideoPlaying && (
        <video src={featured.VideoUrl} autoPlay loop muted id="video" />
      )}
    </div>
  );
};

export default Home;
