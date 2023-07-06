import GifFav from "../gif/GifFav";

export default function ListOfGifsFavs({gifs, removeGifFav}) {
    return(
        <div className="bg-slate-700 absolute top-16 right-3 z-20 text-white p-5 rounded-lg flex flex-col gap-2">
            {   
                gifs.length > 0? gifs.map(({url, title, id}) => <GifFav key={id} id={id} title={title} url={url} removeGifFav={removeGifFav} />) :
                                <p>No hay gifs favoritos</p>
            }
        </div>
    )
}