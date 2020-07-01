import Socket from "../util/Socket";
import { scorecardUrl, scorecardEPs } from "../Config.json";
import Axios from "axios";

const { createEP, retrieveEP, updateEP, deleteEP } = scorecardEPs;

async function createCard(email, card) {
    const createURL = scorecardUrl + createEP;

    return await Socket.POST(createURL, card);
}

async function allCards(email) {
    const allURL = scorecardUrl + retrieveEP;

    const { common } = Axios.defaults.headers;

    common["email"] = email;

    return await Socket.GET(allURL, email);
}

async function retrieveCard(email, id) {
    const retrieveURL = scorecardUrl + retrieveEP + "/" + id;

    const { common } = Axios.defaults.headers;

    common["email"] = email;

    return await Socket.GET(retrieveURL);
}

async function updateCard(card, id) {
    const updateURL = scorecardUrl + updateEP + "/" + id;

    return await Socket.POST(updateURL, card);
}

async function deleteCard(email, id) {
    const deleteURL = scorecardUrl + deleteEP;

    const payLoad = {
        email: email,
        id: id
    }

    return await Socket.POST(deleteURL, payLoad);
}

export default {
    createCard,
    allCards,
    retrieveCard,
    deleteCard,
    updateCard
};