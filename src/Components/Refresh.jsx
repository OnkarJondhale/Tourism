function Refresh()
{
    return(
        <div className="h-[10rem] w-[20rem] border-white border-2 text-white flex flex-col justify-around items-center">
            <p className="text-4xl font-mono font-bold">No Tours Left </p>
            <button className="h-1/3 w-2/3 border-2 border-white font-mono rounded-xl hover:bg-blue-600" onClick={()=>location.reload()}> Refresh The Page</button>
        </div>
    );
}

export default Refresh