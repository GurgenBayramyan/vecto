import { useFeatured, useIsVideoPlaying } from "../../../../store/selectors";
import { useAppDispatch } from "../../../../store";
import { setPlaying } from "../../../../store/slices/effectSlice/effectSlice";
import ReactPlayer from "react-player";
import styles from "./VideoModal.module.scss";
import Modal from "react-modal";

const VideoModal = () => {
    const dispatch = useAppDispatch();
    const isVideoModalOpen = useIsVideoPlaying();
    const { VideoUrl } = useFeatured();

    return (
        <Modal
            isOpen={isVideoModalOpen}
            onRequestClose={() => dispatch(setPlaying(false))}
            contentLabel="Video Modal"
            className={styles.videoModal}
            overlayClassName={styles.overlay}
        >
            <ReactPlayer url={VideoUrl} controls width="100%" height="100%" />
            <button
                onClick={() => dispatch(setPlaying(false))}
                className={styles.closeButton}
            >
                Close
            </button>
        </Modal>
    );
};

export default VideoModal;
