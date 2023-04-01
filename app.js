// 1. then

fetch("LINK").then(response => {
    response.json().then ((data) => {
        console.log(data)
    })
})