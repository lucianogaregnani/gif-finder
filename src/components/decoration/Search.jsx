
export default function Search({change, submit}) {
    return(
        <form onSubmit={submit}>
            <div className="flex items-center">
                <input className="h-10 w-56 md:w-80 lg:h-12 lg:w-96 rounded-l-full pl-5" type="text" placeholder="Busque su gif!" onChange={change}/>
                <button className="rounded-r-full w-10 h-10 lg:w-12 lg:h-12 border-0 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">
                    <img className="w-6 mx-auto" src="/src/assets/magnifying-glass-solid.svg" alt="search" />
                </button>
            </div>
        </form>
    )
}