export default function ButtonCard({id, text, url = '#', color, addGifFav = () => {}}) {
    return(
        <a href={url} className={`ml-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ${color} rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300`} onClick={() => addGifFav(id)}>
            {text}
        </a>
    )
}