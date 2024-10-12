import Modal from "react-modal";
import styles from "./infoModalStyles.module.scss";
import { useFeatured, useIsInfoModalOpen } from "../../../../store/selectors";
import { useAppDispatch } from "../../../../store";
import { setInfoModal } from "../../../../store/slices/effectSlice/effectSlice";

const InfoModal = () => {
    const dispatch = useAppDispatch();
    const featured = useFeatured();
    const isOpenInfoModal = useIsInfoModalOpen();

    const { Title, Description, Date } = featured;

    const onClose = () => {
        dispatch(setInfoModal(false));
    };

    return (
        <Modal
            isOpen={isOpenInfoModal}
            onRequestClose={onClose}
            contentLabel="Info Modal"
            className={styles.infoModal}
            overlayClassName={styles.overlay}
        >
            <h2>{Title}</h2>
            <p>{Description}</p>
            <p>{Date.slice(0, 10)}</p>
            <button onClick={onClose} className={styles.closeButton}>
                Close
            </button>
        </Modal>
    );
};

export default InfoModal;
