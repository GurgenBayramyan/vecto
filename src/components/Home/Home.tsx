import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { useDispatch } from "react-redux";
import { setFeatured, setMovies } from "../../store/slices/moviesSlice";
import movieTitleImg from "../../assets/FeaturedTitleImage.png";
import Trending from "../Trending/Trending";
import { IMovie } from "../../store/types";
const Home = () => {
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

  return (
    <div className={styles.Home}>
      <div className={styles.movieDetails}>
        <p className={styles.category}>Movie</p>
        <img src={movieTitleImg} />
        <p className={styles.dateRatDur}>2021 18+ 1h 48m</p>
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          nostrum non facere, exercitationem sequi iste optio nam, quaerat
          nesciunt sint, quae ut doloribus eum consectetur.
        </p>
        <div className={styles.btns}>
          <button className={styles.play}>
            <i className="bx bx-play"></i> Play
          </button>
          <button className={styles.info}>More Info</button>
        </div>
      </div>
      <Trending />
    </div>
  );
};

export default Home;
