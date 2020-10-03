import React, { useState } from 'react'
import Results from '../Results'

export default React.memo(({templates}) => {

    const [search, setSearch] = useState('')

    return (
        <div className="w-full flex flex-col items-center justify-center px-4">
            <h1 className="text-2xl my-4 text-white">Search for a technology</h1>
            <input type="text" 
                className="border h-12 sm:w-1/2 w-full bg-white shadow-xl rounded-lg p-2" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <Results templates={templates} search={search} />
        </div>
    )
})