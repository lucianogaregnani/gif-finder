import { useState } from "react";
import Search from "./decoration/Search";
import ListOfGifsFavs from "./listoofgifs/ListOfGifsFavs";
import { GiHamburgerMenu } from "react-icons/gi"

export default function Header({change, submit, gifsFav, removeGifFav}) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    return(
        <header className="p-4 bg-gray-900 flex justify-center relative">
            <Search change={change} submit={submit}/>
            <button className="h-10 w-10 absolute right-3 top-[20px]" onClick={handleClick}>
                <GiHamburgerMenu className="text-white text-2xl"/>
            </button>
            {
                isClicked && <ListOfGifsFavs gifs={gifsFav} removeGifFav={removeGifFav} />
            }
        </header>
    )
}