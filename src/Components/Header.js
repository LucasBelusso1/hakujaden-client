import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Anime } from "../Assets/anime.svg";
import { UserContext } from "../UserContext";

const Header = () => {
    const { data } = useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to="/" className={styles.logo} aria-label="Anime - home">
                    <Anime />
                </Link>
                {data ? (
                    <Link to="/conta" className={styles.login}>
                        {data.username}
                    </Link>
                ) : (
                    <Link to="/login" className={styles.login}>
                        Entrar
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
