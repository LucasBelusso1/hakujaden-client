import React, { useContext } from "react";
import { USER_POST } from "../../Api";
import useAxios from "../../Hooks/useAxios";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";

const LoginCreate = () => {
    const username = useForm();
    const password = useForm();

    const { loading, error, request } = useAxios();

    const { userLogin } = useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            password: password.value,
        });

        const { response } = await request(url, options);
        if (response) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section>
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                    placeholder="Digite um usuário"
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                    placeholder="Digite uma senha"
                />
                {loading ? (
                    <Button disabled>Cadastrando...</Button>
                ) : (
                    <Button>Cadastrar</Button>
                )}
                <Error error={error} />
            </form>
        </section>
    );
};

export default LoginCreate;
