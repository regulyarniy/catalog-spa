import { connect } from "react-redux";
import LoginForm from "../../components/LoginForm";
import { loginRequest } from "../../actions/userActions";

const mapDispatchToProps = dispatch => {
    return {
        // handleSubmit: (login, password) => {
            dispatch(loginRequest(login, password));
        }
    }
}

const RegisterFormContainer = connect(null, mapDispatchToProps)(LoginForm);

export default RegisterFormContainer;