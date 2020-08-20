import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Label, Form } from "semantic-ui-react";
/** REVIEW: Можно лучше:
 *   Лишний импорт. Label не использован
 **/

const loginUrl = "http://localhost:3000/login";

export default function LoginForm({ handleSubmit }) {
    /** REVIEW: Можно лучше:
    *   Пропсы-колбеки обычно именуют через on(onChange, onClose), а обработчики как handle
     *  Т.е. выглядит обычно так <Input onChange={handleChange}/>
    **/
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (e, value, setter) => {
        e.preventDefault();
        setter(value);
    };
    /** REVIEW: Можно лучше:
    *   Не сразу понял что тут происходит. Можно упростить как
     *   const [credentials, setCredentials] = useState({email: ``, password: ``});
     *   const handleChangeCredentials = (fieldName) => (e) => {
     *       e.preventDefault();
     *       setCredentials({...credentials, [fieldName]: e.target.value});
     *   }
     *
     *   <Input onChange={setCredentials(`email`)} value={credentials.email}/>
     *   <Input onChange={setCredentials(`password`)} value={credentials.password}/>
    **/

    return (
        <div>
            <Form method="post" action="/login">
                <label>
                    <Input type="text" name="name" onChange={e => { handleInput(e, e.target.value, setEmail) }} value={email} placeholder="Login" />
                    <Input type="text" name="password" onChange={e => { handleInput(e, e.target.value, setPassword) }} value={password} placeholder="Password" />
                    /** REVIEW: Можно лучше:
                    *   Лучше не инлайнить обработчики в JSX, а обьявлять в теле функции\методе компонента. Так код выглядит чище, а при использовании классовых компонентов работает оптимальней(не создается обработчик при каждом рендере)
                    *   const handleClick = () => {...}
                    *
                    *    return <Button onClick={handleClick}/>
                    **/
                    <Input type="submit" name="loginSubmit" onClick={e => {
                        e.preventDefault();
                        handleSubmit(loginUrl, email, password);
                    }} value="Log In" />
                </label>
            </Form>
            <Link to="/register" >Don't have an account?</Link>
        </div>
    );
}