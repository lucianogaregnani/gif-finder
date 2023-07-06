import Gif from "../gif/Gif";

export default function ListOfGifs({gifs, showGif}) {
    return(
        <>
            {
                gifs.map(({url, title, id}) => <Gif key={id} id={id} title={title} url={url} clickCard={showGif} />)
            }
        </>
    )
}