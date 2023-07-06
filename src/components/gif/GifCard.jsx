import ButtonCard from "../decoration/ButtonCard"
import {AiOutlineCloseSquare} from 'react-icons/ai'
export default function GifCard({info, removeGif, addGifFav}) {
    
    const {id, url, title, username} = info

    return(
        <div className="fixed h-screen bg-black bg-opacity-75 top-0 w-full flex justify-center items-center z-30">
            <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <button className="w-10 h-10 absolute top-3 right-3" onClick={removeGif} >
                    <AiOutlineCloseSquare className="text-red-500 text-5xl"/>
                </button>
                <img className="rounded-t-lg h-72 w-full" src={url} alt="" />
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{username}</p>
                    <ButtonCard text='Ver en Giphy' url={url} color='bg-blue-500' />
                    <ButtonCard text='Agregar a favoritos' color='bg-green-500' addGifFav={addGifFav} id={id}/>
                </div>
            </div>
        </div>
    )
}