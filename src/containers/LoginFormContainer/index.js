import { connect } from "react-redux";
import LoginForm from "../../components/LoginForm";
import { login } from "../../actions/userActions";
/** REVIEW: Можно лучше:
*   Контейнер не содержит логики, кроме подключения к redux. Обычно так не делают.
 *  Если у тебя в контейнере только логика подключения стейта\диспатча, то все равно стоит описать компонент
 *
 *   const LoginFormContainer = ({handleSubmit}) => {
 *       return <LoginForm handleSubmit={handleSubmit}/>
 *   }
 *
 *  export default connect(null, mapDispatchToProps)(LoginFormContainer);
 *
 *  Если же ты хотел сделать переиспоьзуемый HOC, который прокидывает handleSubmit в компонент, то его нужно описать как функцию
 *
 *  const withHandleSubmit = (Component) => connect(null, mapDispatchToProps)(LoginForm);
 *  const LoginFormContainer = withHandleSubmit(LoginForm);
**/

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (url, email, password) => {
            dispatch(login(url, email, password));
        }
    }
}

const LoginFormContainer = connect(null, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;
