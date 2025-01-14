import { useState } from "react";

export const useModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return { modalVisible, openModal, closeModal };
};
