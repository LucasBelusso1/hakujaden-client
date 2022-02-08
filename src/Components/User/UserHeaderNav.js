import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
    const { userLogout } = useContext(UserContext);

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta">
                <MinhasFotos />
            </NavLink>
            {/* <NavLink to="/conta/estatisticas">Estatísticas</NavLink> */}
            <NavLink to="/conta/postar">
                <AdicionarFoto />
            </NavLink>
            <button onClick={userLogout}>
                <Sair />
            </button>
        </nav>
    );
};

export default UserHeaderNav;
