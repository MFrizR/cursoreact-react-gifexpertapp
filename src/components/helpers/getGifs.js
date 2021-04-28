
export const getGifs= async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit10&api_key=IuCXbeEsXLon9Zy1mpxtYVB9CF0xPaW8`
    const resp = await fetch( url );
    const {data} = await resp.json();

    console.log(data)

    const gifs = data.map( img => {

        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //console.log(gifs);
    return gifs;
}