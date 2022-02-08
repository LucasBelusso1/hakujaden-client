import React from "react";
import { useState } from "react";
import { COMMENT_POST } from "../../Api";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useAxios from "../../Hooks/useAxios";
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id }) => {
    const { error, request } = useAxios();
    const [ comment, setComment ] = useState("");

    async function handleSubmit(event) {
      event.preventDefault();
      const token = window.localStorage.getItem("token");
      const { url, options } = COMMENT_POST({ comment, photoId: id }, token);
      const { json } = await request(url, options)
      if (json) {
        setComment('');
      }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea
                id="comment"
                name="comment"
                className={styles.textarea}
                placeholder="Comente..."
                value={comment}
                onChange={({ target }) => setComment(target.value)}
            />
            <button className={styles.button}>
                <Enviar />
            </button>
        </form>
    );
};

export default PhotoCommentsForm;
