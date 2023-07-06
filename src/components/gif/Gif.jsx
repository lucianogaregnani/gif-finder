export default function Gif({id, title, url, clickCard}) {
    return(
        <div className="w-full max-h-96" onClick={() => clickCard(id)}>
            <img className="w-full h-full" src={url} alt={`gif ${title}`} />
        </div>
    )
}