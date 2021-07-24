export default (data) => {
    return new Promise((resole, reject) => {
        const url = `http://localhost:3001/items/${data}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => resole(res))
            .catch(err => reject(err))
    })
}