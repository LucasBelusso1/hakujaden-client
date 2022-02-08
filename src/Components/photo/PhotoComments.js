import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";
import { useRef } from "react";
import { useEffect } from "react";

const PhotoComments = (props) => {
    const [comments, setComments] = useState(() => props.comments);
    const commentsSection = useRef(null);

    const { login } = useContext(UserContext);

    useEffect(() => {
        commentsSection.current.scrollTop =  commentsSection.current.scrollHeight;
    }, [comments]);

    return (
        <>
            <ul ref={commentsSection} className={styles.comments}>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <b>{comment.user.username}: </b>
                        <span>{comment.comment}</span>
                    </li>
                ))}
            </ul>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
        </>
    );
};

export default PhotoComments;
