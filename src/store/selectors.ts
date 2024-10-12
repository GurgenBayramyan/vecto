import { useAppSelector } from ".";

export const useOpacityBg = () =>
    useAppSelector((state) => state.effects.showOpacityBg);
export const useMovies = () => useAppSelector((state) => state.movies.movies);
export const useFeatured = () =>
    useAppSelector((state) => state.movies.featured);
export const useIsVideoPlaying = () =>
    useAppSelector((state) => state.effects.isVideoPlaying);

export const useIsInfoModalOpen = () =>
    useAppSelector((state) => state.effects.isOpenInfoModal);
