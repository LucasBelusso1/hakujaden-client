import React, { useEffect } from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useAxios from "../../Hooks/useAxios";
import { PHOTOS_GET } from "../../Api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ setModalPhoto }) => {
    const { data, loading, error, request } = useAxios();

    useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET();
            const { json } = await request(url, options);
        }
        fetchPhotos();
    }, [request]);

    if (error) {
        return <Error error={error} />;
    }
    if (loading) {
        return <Loading />;
    }
    if (data) {
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map((photo) => (
                    <FeedPhotosItem
                        key={photo.id}
                        photo={photo}
                        setModalPhoto={setModalPhoto}
                    />
                ))}
            </ul>
        );
    } else {
        return null;
    }
};

export default FeedPhotos;
