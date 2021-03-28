import axios from "axios"

const instance = axios.create({
    baseURL: 'http://40.117.124.200:5000/api/',
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
