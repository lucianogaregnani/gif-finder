import Search from "./decoration/Search";

export default function Inicio({change, submit}) {
    return(
        <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-slate-900 via-slate-900 to-gray-800">
            <h1 className="text-4xl text-white mb-4">Busca los mejores <span className="underline decoration-blue-400">GIFS!</span></h1>
            <Search change={change} submit={submit}/> 
        </main>
    )
}