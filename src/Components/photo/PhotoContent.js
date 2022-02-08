import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import styles from "./PhotoContent.module.css";
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";

const PhotoContent = ({ data }) => {
    const user = useContext(UserContext);
    const { url, comments, name, accesses, id } = data[0];

    return (
        <div className={styles.photo}>
            <div className={styles.img}>
                <img src={url} alt={name} />
                <div className={styles.details}>
                    <div>
                        <p className={styles.author}>
                            {user.data && user.data.id === data[0].userId ? (
                                <PhotoDelete id={id} />
                            ) : (
                                <Link to={`/perfil/${data[0].userId}`}>
                                    Autor
                                </Link>
                            )}
                            <span className={styles.visualizacoes}>
                                {accesses}
                            </span>
                        </p>
                        <h1 className="title">
                            <Link to={`/foto/${id}`}>{name}</Link>
                        </h1>
                    </div>
                    <ul className={styles.attributes}>
                        <li>HakuJaden - Social Softwares</li>
                        <li>CEO Lucas Belusso</li>
                    </ul>
                </div>
            </div>
            <PhotoComments id={id} comments={comments} />
        </div>
    );
};

export default PhotoContent;
