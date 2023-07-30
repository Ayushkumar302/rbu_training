document.getElementById('search-btn').addEventListener('click', () => {

    const text = document.getElementById('search-text').value
    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA3-7aMNIQaqZiHvhK8E1k2E5Nuf2tptZo&part=snippet&q=${text}&maxResults=50`
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            const response = JSON.parse(xhr.responseText)
            let output = ''
            for(let i=0; i < response.items.length; i++) {
                output += `
                    <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank">
                        <div style="width: 23%; margin: 10px;">
                            <img style="width:100%" src="${response.items[i].snippet.thumbnails.high.url}" />
                            <h4>${response.items[i].snippet.title}</h4>
                            <p>${response.items[i].snippet.description}</p>
                        </div>
                    </a>
                `
            }
            document.getElementById('my-div').innerHTML = output
        }
    }
    xhr.send()
})