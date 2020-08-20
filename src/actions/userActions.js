import actionTypes from "../constants/userActionTypes";

export const login = (url, email, password) => {
    return async function(dispatch) {
        dispatch(loginRequest(email, password));

        const requestOptions = {
            method: "POST",
            headers: {  "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password
            })
        }

        let request = await fetch(url, requestOptions);
        let response = await request.json();

        if (response.ok) {
            dispatch(loginSuccess(response.userType));
        } else {
            dispatch(loginFailure("Wrong username or password."));
        }
        /** REVIEW: Можно лучше:
        *   Нужно обработать ошибки запроса
        **/
    }
}

export const loginRequest = (email, password) => {
    return {
        type: actionTypes.loginRequest,
        email,
        password
    }
}

export const loginSuccess = userType => {
    return {
        type: actionTypes.loginSuccess,
        userType
    }
}

export const loginFailure = ()=> {
    return {
        type: actionTypes.loginFailure
    }
}

/** REVIEW: Можно лучше:
*   url лучше зашить, врядли ли он будет часто меняться
 *   вообще когда в функцию передается больше 2 параметров это повод задуматься обьединить их в обьект
**/
export const registration = (url, email, password) => {
    return async function(dispatch) {
        dispatch(registrationRequest(email, password));

        const requestOptions = {
            method: "POST",
            headers: {  "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password
            }),
        }

        let request = await fetch(url, requestOptions);
        let response = await request.json();

        if (response.errorCode === 1) {
            dispatch(registrationFailure("This email is unavailable!"));
        } else {
            dispatch(registrationSuccess());
        }
        /** REVIEW: Можно лучше:
         *   Нужно обработать ошибки запроса
         **/
    }
}

export const registrationRequest = (email, password) => {
    return {
        type: actionTypes.registrationRequest,
        email,
        password
    }
}

/** REVIEW: Можно лучше:
 *  в одну строку
*   export const registrationSuccess = () => ({ type: actionTypes.registrationSuccess })
**/
export const registrationSuccess = () => {
    return {
        type: actionTypes.registrationSuccess
    }
}

export const registrationFailure = ()=> {
    return {
        type: actionTypes.registrationFailure
    }
}

export const logout = () => {
    return {
        type: actionTypes.logout
    }
}