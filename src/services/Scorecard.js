import Socket from "../util/Socket";
import { scorecardURL, scorecardEPs } from "../Config.json";

const { createEP, rertieveEP, updateEP, deleteEP } = scorecardEPs;

async function createCard(email, card) {
    const createURL = scorecardURL + createEP;

    return await Socket.POST(createURL, card);
}

async function retrieveCard(email, card) {
    const retrieveURL = scorecardURL + retrieveEP;

    return await Socket.POST(retrieveURL, card);
}

async function updateCard(email, card) {
    const updateURL = scorecardURL + updateEP;

    return await Socket.POST(updateURL, card);
}

async function deleteCard(email, card) {
    const createURL = scorecardURL + createEP;

    return await Socket.POST(deleteURL, card);
}