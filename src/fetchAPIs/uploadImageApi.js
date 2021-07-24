

export default (data) => {
    return new Promise((resole, reject) => {
        console.log('data', data);
        const url = `http://localhost:3001/tasks/upload`
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: data
        })
            .then(res => res.json())
            .then(res => resole(res))
            .catch(err => reject(err))
    })
}