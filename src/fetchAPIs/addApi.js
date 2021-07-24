export default (data) => {
    return new Promise((resole, reject) => {
        console.log('data post', data);
        const url = `http://localhost:3001/items`
        fetch(url, {
            method: "POST",
            headers: { "Content-type": "Application/json" },
            body: JSON.stringify({
                name: data
            })
        })
            .then(res => res.json())
            .then(res => resole(res))
            .catch(err => reject(err))
    })
}