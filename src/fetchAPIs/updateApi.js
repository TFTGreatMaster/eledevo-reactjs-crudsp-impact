export default (data) => {
    return new Promise((resole, reject) => {
        console.log('update', data);
        const url = `http://localhost:3001/items/${data.id}`
        console.log('url', url);
        fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify({
                name: data.name
            })
        })
            .then(res => res.json())
            .then(res => resole(res))
            .catch(err => reject(err))
    })
}