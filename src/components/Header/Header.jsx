import React from "react";

const Header = () => {
    return(
    <header className='flex justify-start items-betwen bg-slate-500 w-full h-[25vh] p-1 rounded-md'>
        <div>
            <h1 className="text-green-500 text-2xl font-bold flex justify-start items-start">MyTinerary</h1>
            <h2 className="text-green-500 text-xl font-semibold flex justify-start items-end">Find your perfect trip, designed by insiders who know and love their cities!</h2>
        </div>
    </header>
    )
}

export default Header 