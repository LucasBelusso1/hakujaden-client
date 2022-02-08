import React from "react";
import styles from "./UserPhotoPost.module.css";
import useForm from "../../Hooks/useForm";
import useAxios from "../../Hooks/useAxios";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import { useState } from "react";
import { PHOTO_POST } from "../../Api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserPhotoPost = () => {
    const nome = useForm();
    const [img, setImg] = useState({});
    const { data, error, loading, request } = useAxios();
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            navigate("/conta");
        }
    }, [data, navigate]);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", img.raw);
        formData.append("name", nome.value);

        const token = window.localStorage.getItem("token");
        const { url, options } = PHOTO_POST(token, formData);
        const { response } = request(url, options);
    }

    function handleImgChange({ target }) {
        console.log(target.files[0]);
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });
    }

    return (
        <section className={`${styles.photoPost} animeleft`}>
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="nome" {...nome} />
                <input
                    className={styles.file}
                    type="file"
                    name="img"
                    id="img"
                    onChange={handleImgChange}
                />

                {loading ? (
                    <Button disabled>Enviando...</Button>
                ) : (
                    <Button>Enviar</Button>
                )}
                <Error error={error} />
            </form>
            <div>
                {img.preview && (
                    <div
                        className={styles.preview}
                        style={{ backgroundImage: `url('${img.preview}')` }}
                    ></div>
                )}
            </div>
        </section>
    );
};

export default UserPhotoPost;
