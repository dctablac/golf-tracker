import Socket from "../util/Socket";
import { idmUrl, idmEPs } from "../Config.json";

const { loginEP, registerEP } = idmEPs;

async function login(email, password) {
    const payLoad = {
        email: email,
        password: password
    };
    const loginUrl = idmUrl + loginEP;

    return await Socket.POST(loginUrl, payLoad);
}

async function register(email, password) {
    const payLoad = {
        email: email,
        password: password
    };
    const registerUrl = idmUrl + registerEP;

    return await Socket.POST(registerUrl, payLoad);
}

export default {
    login, register
};