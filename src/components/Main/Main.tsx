import { useEffect } from "react";
import movieTitleImg from "../../assets/FeaturedTitleImage.png";
import { convertSeconds } from "../../helpers/secondsConverter";
import { useFeatured } from "../../store/selectors";
import {
    setFeatured,
    setMovies,
} from "../../store/slices/movesSlice/moviesSlice";
import Trending from "../Trending/Trending";
import { fetchMoviesData, getFeaturedMovie } from "../../services";
import { useAppDispatch } from "../../store";
import {
    setInfoModal,
    setPlaying,
} from "../../store/slices/effectSlice/effectSlice";
import VideoModal from "./components/VideoModal";
import InfoModal from "./components/InfoModal";
import styles from "./Main.module.scss";
import Details from "./components/Details";

const Main = () => {
    const featured = useFeatured();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data = await fetchMoviesData();
                dispatch(setMovies(data.TendingNow));
                const movieId = localStorage.getItem("id");
                const featuredMovie = getFeaturedMovie(data, movieId!);
                dispatch(setFeatured(featuredMovie));
            } catch (error) {
                console.error("Error loading movies:", error);
            }
        };
        loadMovies();
    }, []);

    return (
        <div className={styles.Home}>
            <Details />
            <Trending />
            <VideoModal />
            <InfoModal />
        </div>
    );
};

export default Main;
