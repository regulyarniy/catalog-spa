// A user example:
// {
//     name: string,
//     surname: string,
//     email: string,
//     phone: string,
//     state: string,
//     city: string,
//     adress: string,
//     roles: string,
//     loggedIn: boolean
//     shoppingCart: object|array,
// }
/** REVIEW: Можно лучше:
*   а зачем тут схема данных юзера?
**/

export default {

    registrationRequest: "USER_registration_REQUEST",
    registrationSuccess: "USER_registration_SUCCESS",
    registrationFailure: "USER_registration_FAILURE",
    /** REVIEW: Можно лучше:
    *   отбивка пробелами внутри обьекта выглядит странно, обычно такое eslint не дает делать
    **/
    loginRequest: "USER_LOGIN_REQUEST",
    loginSuccess: "USER_LOGIN_SUCCESS",
    loginFailure: "USER_LOGIN_FAILURE",

    logout: "USER_LOGOUT",

    deleteRequest: "USER_LOGIN_REQUEST",
    deleteSuccess: "USER_LOGIN_SUCCESS",
    deleteFailure: "USER_LOGIN_FAILURE",

    getAllUsersRequest: "GET_ALL_USERS_REQUEST",
    getAllUsersSuccess: "GET_ALL_USERS_SUCCESS",
    getAllUsersFailure: "GET_ALL_USERS_FAILURE",

    addRole: "CHANGE_USER_ROLE",
    removeRole: "REMOVE_USER_ROLE",

    setName: "SET_USER_NAME",
    setSurname: "SET_USER_SURNAME",
    setEmail: "SET_USER_EMAIL",
    setPhone: "SET_USER_PHONE",
    setState: "SET_USER_STATE",
    setCity: "SET_USER_CITY",
    setAddress: "SET_USER_ADDRESS"
}