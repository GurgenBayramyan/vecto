import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { useDispatch } from "react-redux";
import { setMovies } from "../../store/slices/moviesSlice";
const Home = () => {
  const dispatch = useDispatch();
  const fetchJson = () => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setMovies(data.TendingNow));
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return <div className={styles.Home}></div>;
};

export default Home;
