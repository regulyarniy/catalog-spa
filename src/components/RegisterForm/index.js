import React, { useState }  from "react";
import { Input, Label, Form } from "semantic-ui-react";
/** REVIEW: Можно лучше:
*   Лишний импорт. Label не использован
**/

const usersUrl = "http://localhost:3000/users";
/** REVIEW: Можно лучше:
*   Во первых: это урл не будет работать после деплоя
 *  Во вторых: компонент ничего не должен по хорошему знать об транспортном слое(как и куда ходит апи)
**/

export default function RegisterForm({ handleSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleInput = (e, value, setter) => {
        e.preventDefault();
        setter(value);
    };

    return (
        /** REVIEW: Можно лучше:
        *   на форму нужно повешать onSubmit с preventDefault
        **/
        <Form method="post" action="/users">
            <label>
                <Input type="email" onChange={e => { handleInput(e, e.target.value, setEmail) }} value={email} placeholder="E-mail" />
                <Input type="text" onChange={e => { handleInput(e, e.target.value, setPassword) }} value={password} placeholder="Password" />
                <Input type="text" onChange={e => { handleInput(e, e.target.value, setPasswordConfirmation) }} value={passwordConfirmation} placeholder="Confirm password" />
                <Input type="submit" name="registerSubmit" onClick={e => {
                    e.preventDefault();
                    if (password === passwordConfirmation) {
                        handleSubmit(usersUrl, email, password);
                    } else {
                        /** REVIEW: Можно лучше:
                        *   Ошибку нужно показать пользователю, а не в консоль
                        **/
                        throw("Passwords do not match");
                    }
                }} value="Register" />
            </label>
        </Form>
    );
}