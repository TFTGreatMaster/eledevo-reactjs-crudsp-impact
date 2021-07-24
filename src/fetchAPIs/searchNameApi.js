export default (data) => {
    console.log("DÂTTATA", data);
    return new Promise((resole, reject) => {
        const url = `http://localhost:3001/items/search/id?name=${data.search}`
        console.log('url', url);
        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => resole(res))
            .catch(err => reject(err))
    })
}