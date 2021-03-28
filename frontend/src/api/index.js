import axios from "axios"

const instance = axios.create({
    baseURL: 'http://b74a8f42f257.ngrok.io/api/',
    timeout: 0,
});

export const getAllExps = () => {
    return new Promise((resolve, reject) => {
        instance({
            method: "get",
            url: "get/exps",
        }).then(function (response) {
            resolve(response.data.data);
        })
            .catch(function (error) {
                reject(error);
            })
    })
}

export const addPicture = ({event_id, x, y, name}) => (new Promise((resolve, reject) => {
    instance({
        method: "post",
        url: 'add/picture',
        data: {event_id, x, y, name}
    }).then(function (response) {
        resolve(response.data.data);
    })
        .catch(function (error) {
            reject(error);
        })
}))

export const getAllPictureIn = (id) => (new Promise((resolve, reject) => {
    instance({
        method: "get",
        url: `get/plan/${id}`,
    }).then(function (response) {
        resolve(response.data.data);
    })
        .catch(function (error) {
            reject(error);
        })
}))
