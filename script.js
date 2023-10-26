const audioComponent = document.getElementById('audioComponent')
const mainContainer = document.getElementById('mainContainer')

fetch("https://leonardoapi.onrender.com/music")
    .then(function (response) {
        return response.json()
    })
    .then(function (array) {
        array
            .map(transFormJSONElementIntoHTMLElement)
            .forEach(appendElementIntoMainContainer)
    })
    .catch(function (reason) {
        console.error(reason)
    })

function transFormJSONElementIntoHTMLElement(jsonElement) {
    const divContainer = document.createElement('div')
    /* TODO: crear la clase song-style en el style.css */
    // divContainer.classList.add('song-style')
    divContainer.innerHTML = /* html */ `            
        <img class="" src="${jsonElement.path.front}">
        <p class="">${jsonElement.title}</p>
        <p class="">${jsonElement.author}</p>
        <p class="">${jsonElement.album}</p>            
    `
    divContainer.addEventListener('click', function () {
        audioComponent.setAttribute('src', jsonElement.path.audio)
    })

    return divContainer
}

function appendElementIntoMainContainer(htmlNode) {
    mainContainer.appendChild(htmlNode)
}
