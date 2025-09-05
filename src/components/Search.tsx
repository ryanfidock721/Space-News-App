import { useRef } from 'react'

export function Search({setUserText}) {
    const inputRef = useRef(null);

    function searchPress() {
        const input = inputRef.current.value;
        console.log('Search Pressed')
        setUserText(input);
        Body();
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
        searchPress();
        }
    }

    return (
        <div>
            <input type='text' ref={inputRef} onKeyDown={handleKeyDown} placeholder='Space words here! Eg: NASA, European Spaceflight' className='text-sm bg-white  w-95 p-2 text-black rounded-l-full shadow-md'></input>
            <button onClick={searchPress} className='cursor-pointer bg-amber-500 active:bg-amber-500 hover:bg-orange-300 p-2 w-20 rounded-r-full shadow-md text-sm'>Search</button>
        </div>
    )
}