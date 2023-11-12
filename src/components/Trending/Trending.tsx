import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { moviesSelector } from "../../store/selectors";
import { setVideoPlaying } from "../../store/slices/effectSlice";
import { setFeatured } from "../../store/slices/moviesSlice";
import { IMovie } from "../../store/types";
import styles from "./Trending.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
};
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
