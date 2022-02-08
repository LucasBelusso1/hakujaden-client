import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import styles from "./Login.module.css";

const Login = () => {
    const { login } = useContext(UserContext);

    if (login === true) {
        return <Navigate to="/conta" />;
    }
    return (
        <section className={styles.login}>
            <div className={styles.container}>
                <div className={styles.forms}>
                    <Routes>
                        <Route path="/" element={<LoginForm />} />
                        <Route path="criar" element={<LoginCreate />} />
                    </Routes>
                </div>
            </div>
        </section>
    );
};

export default Login;
