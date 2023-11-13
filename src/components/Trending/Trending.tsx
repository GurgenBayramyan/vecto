import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { moviesSelector } from "../../store/selectors";
import { setVideoPlaying } from "../../store/slices/effectSlice";
import { setFeatured } from "../../store/slices/moviesSlice";
import { IMovie } from "../../store/types";
import styles from "./Trending.module.scss";
import { responsive } from "../../constants";

const Trending = () => {
  const { movies } = useSelector(moviesSelector);
  const dispatch = useDispatch();

  const onChooseMovie = (mov: IMovie) => {
    sessionStorage.setItem("movieId", mov.Id);
    dispatch(setFeatured(mov));
    dispatch(setVideoPlaying(false));
    setTimeout(() => {
      dispatch(setVideoPlaying(true));
    }, 2000);
  };

  return (
    <div className={styles.Trending}>
      <h3>Trending Now</h3>
      <div className={styles.movieList}>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlaySpeed={3000}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {movies.map((movie) => (
            <div
              className={styles.card}
              onClick={() => onChooseMovie(movie)}
              key={movie.Id}
            >
              <img src={require(`../../assets/${movie.CoverImage}`)} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Trending;
