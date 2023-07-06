
export default async function getGifs({keyword, page} = {}) {
    const apiKey = "4abKJ27hWcJWqioAFFrfMjKcwCPPlLAt"
    const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=27&offset=${page}&rating=g&lang=en`
    
    return await fetch(urlAPI)
        .then(res => res.json())
        .then((res) => {
            const {data = []} = res
            const gifs = data.map((gif) => {
                const {images, title, id, username} = gif
                const url = images.downsized_medium.url

                return {url, title, id, username}
            })
            
            return gifs
        })
}