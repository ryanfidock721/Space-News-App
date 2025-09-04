export function Search() {
    return (
        <div>
            <input type='text' placeholder='Space words here! Eg: NASA, European Spaceflight' className='text-sm bg-white  w-95 p-2 text-black rounded-l-full shadow-md'></input>
            <button className='cursor-pointer bg-amber-500 active:bg-amber-500 hover:bg-orange-300 p-2 w-20 rounded-r-full shadow-md text-sm'>Search</button>
        </div>
    )
}