import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTENTICATE_POST, USER_GET } from "./Api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const userLogout = useCallback(
        async function () {
            setData(null);
            setError(null);
            setLoading(false);
            setLogin(false);
            window.localStorage.removeItem("token");
            navigate("/login");
        },
        [navigate]
    );

    async function getUser(token) {
        const { url, options, config } = USER_GET(token);

        const response = await axios({ url, ...options, ...config }).catch(
            (res) => {}
        );

        const json = await response.data;
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = AUTENTICATE_POST({ username, password });
            const tokenRes = await axios({ url, ...options });
            const { token } = await tokenRes.data;
            window.localStorage.setItem("token", token);
            await getUser(token);
            navigate("/conta");
        } catch (err) {
            setError("Usuário inválido");
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem("token");
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { url, options, config } = USER_GET(token);
                    const response = await axios({
                        url,
                        ...options,
                        ...config,
                    });
                    if (!response) {
                        throw new Error("Token inválido!");
                    }
                    await getUser(token);
                } catch (err) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }
        autoLogin();
    }, [userLogout, navigate]);

    return (
        <UserContext.Provider
            value={{ userLogin, userLogout, data, error, loading, login }}
        >
            {children}
        </UserContext.Provider>
    );
};
