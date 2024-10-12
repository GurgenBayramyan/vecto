import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { setPlaying } from "../../store/slices/effectSlice/effectSlice";
import { setFeatured } from "../../store/slices/movesSlice/moviesSlice";
import { IMovie } from "../../store/types";
import styles from "./Trending.module.scss";
import { responsive } from "../../constants";
import { useMovies } from "../../store/selectors";

const Trending = () => {
    const movies = useMovies();
    const dispatch = useDispatch();

    const onChooseMovie = (mov: IMovie) => {
        localStorage.setItem("id", mov.Id);
        dispatch(setFeatured(mov));
        dispatch(setPlaying(false));
        setTimeout(() => {
            dispatch(setPlaying(true));
        }, 1000);
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
                            <img
                                src={require(`../../assets/${movie.CoverImage}`)}
                                alt=""
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Trending;
