import React, { useEffect, useState } from 'react'

export default React.memo(({search, templates}) => {

    const [results, setResults] = useState([])

    useEffect(() => {
        if (!search || search.length < 1) {
            setResults([])
        } else {
            setResults(templates.filter(t => t.toLowerCase().indexOf(search.toLowerCase()) !== -1))
        }
    }, [search, templates])

    const downloadIgnore = (name) => {
        window.open('https://www.toptal.com/developers/gitignore/api/' + name, '_blank')
    }

    const classes = 'h-64 sm:w-1/2 w-full p-2 rounded-lg mt-2'
    const extraClass = results.length > 0 ? ' bg-white shadow-xl' : '';

    return (
        <div className={classes + extraClass}>
            <ul className="overflow-y-auto h-full">
                { results.map( (result, index) => {
                    const separator = results.length > 1 && index > 0 ? 'border-t' : ''

                    return (
                        <li onClick={() => downloadIgnore(result)} key={index} className={separator + ' py-2 hover:bg-teal-100 cursor-pointer'} >{result}</li>
                    )
                }) }
            </ul>
        </div>
    )
})