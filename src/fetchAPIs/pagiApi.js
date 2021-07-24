import { LIMIT } from "../constants"

export default (data) => {
    console.log('data pagi' , data);
    return new Promise((resole, reject) => {
        const url = `http://localhost:3001/items/pagi?page=${data}&limit=${LIMIT}`
        console.log('ủl',url);
        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => resole(res))
            .catch(err => reject(err))
    })
}