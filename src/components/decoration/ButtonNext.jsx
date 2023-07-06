export default function ButtonChange({text, change, position}) {
    return(
        <button onClick={change} className={`absolute bottom-1 ${position} rounded-2xl w-24 text-white font-bold h-10 border-0 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500`}>
            {text}
        </button>
    )
}