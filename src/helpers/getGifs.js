export const getGifs = async( category ) => {
    //trae imagenes
    //encode escapa espacios
    const url=`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=vM63nzT5OF318JD09Rhl52UrpgB1Gf4q`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    //las procesa
    const gifs = data.map(({id,title,images}) => {
        return {
            id:id,
            title:title,
            url:images?.downsized_medium.url
        }
    })
    // las retorna
    return gifs;
    /*
    console.log(gifs);
    setImages(gifs);*/
}