export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5QiE9erA6qjdIpgb5xSWkj7oDmfYrs5O&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    const gifs = await data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}