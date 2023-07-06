import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

export default function Gifs({change, submit, keyword}) {
    let savedGifsFav = JSON.parse(localStorage.getItem('gifsFav'))
    if(!savedGifsFav) savedGifsFav = []

    const [gifs, setGifs] = useState([])
    const [gifsFav, setGifFavs] = useState(savedGifsFav)

    useEffect(() => {
        if(savedGifsFav) {
            localStorage.setItem('gifsFav', JSON.stringify(gifsFav))
        } else {
            localStorage.setItem('gifsFav', JSON.stringify([]))
        }
    }, [gifsFav])

    const addGifs = (gifs) => {
        setGifs(gifs)
    }

    const addGifFav = (id) => {
        const gif = gifs.find(gif => gif.id === id)

        if(!gifsFav.some(gifFav => gifFav.id === id)) {
            const gifsFavAux = [...gifsFav]
            gifsFavAux.push(gif)
            setGifFavs(gifsFavAux)
        }
    }

    const removeGifFav = (id) => {
        const gifsFavAux = gifsFav.filter(gif => gif.id !== id)
        setGifFavs(gifsFavAux)
    }

    return(
        <>
            <Header change={change} submit={submit} gifsFav={gifsFav} removeGifFav={removeGifFav}/>
            <Main gifs={gifs} addGifFav={addGifFav} keyword={keyword} addGifs={addGifs} />
            <Footer />
        </>
    )
}