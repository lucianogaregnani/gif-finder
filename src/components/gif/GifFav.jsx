import ButtonCard from "../decoration/ButtonCard";

export default function GifFav({id, url, title, removeGifFav}) {
    return(
        <div className="flex justify-between">
            <a href={url} target="_BLANK">
                <img src={url} className="w-10 h-10" alt="gif" />
            </a>
            <p>{title}</p>
            <button className={`ml-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-400 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300`} 
                        onClick={() => removeGifFav(id)}
            >
                Eliminar
            </button>
        </div>
    )
}