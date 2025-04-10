const data = {
    name: 'tom',
    message: 'Hola'
}

fetch('https://tom.com', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(res => {
    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status`)
    }
            return res.json()
        })
