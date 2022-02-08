import React from "react";
import { PHOTO_DELETE } from "../../Api";
import styles from "./PhotoDelete.module.css";
import useAxios from "../../Hooks/useAxios";

const PhotoDelete = ({ id }) => {
    const { request, loading } = useAxios();

    async function handleClick() {
        const confirm = window.confirm("Tem certeza que deseja deletar?");
        if (confirm) {
            const token = window.localStorage.getItem("token");
            const { url, options } = PHOTO_DELETE(id, token);
            const response = await request(url, options);
            if (response) {
                window.location.reload();
            }
        }
    }

    return (
        <>
            {loading ? (
                <button className={styles.delete} disabled>
                    Deletar
                </button>
            ) : (
                <button onClick={handleClick} className={styles.delete}>
                    Deletar
                </button>
            )}
        </>
    );
};

export default PhotoDelete;
