import { useEffect, useState } from "react";
import Loading from "./decoration/Loading.jsx";
import GifCard from "./gif/GifCard.jsx";
import getGifs from "../services/getGifs.js";
import ListOfGifs from "./listoofgifs/ListOfGifs.jsx";
import ButtonNext from "./decoration/ButtonNext.jsx";
import ButtonChange from "./decoration/ButtonNext.jsx";

export default function Main({gifs, addGifFav, keyword, addGifs}) {
    const [loading, setLoading] = useState(false)
    const [gifCard, setGifCard] = useState({})
    const [page, setPage] = useState(0)

    useEffect(() => {
        setLoading(true)
        getGifs({
                keyword,
                page
            })
            .then(gifs => addGifs(gifs))
            .then(() => setLoading(false))
            .then(() => setGifCard({}))
    }, [keyword, page])

    const nextPage = () => {
        setPage(page + 27)
    }

    const previousPage = () => {
        if(page > 0) {
            setPage(page - 27)
        }
    }

    const showGif = (id) =>{
        const gif = gifs.find(gif => gif.id === id)
        
        setGifCard(gif)
    }

    const removeGif = () => {
        setGifCard({})
    }

    return(
        <>
            {
                loading? <Loading /> :
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-gray-800 relative">
                    <ListOfGifs gifs={gifs} showGif={showGif}/>
                    { Object.keys(gifCard).length > 0 && <GifCard info={gifCard} removeGif={removeGif} addGifFav={addGifFav} /> }
                    <ButtonChange change={nextPage} text="Siguiente" position="right-1" />
                    <ButtonChange change={previousPage} text="Anterior" position="left-1" />
                </main>
            }
        </>
    )
}