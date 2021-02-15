import React, { useState } from "react"
import { useFetch } from "react-custom-hook-use-axios"
import Card from "../components/Card"
import { useDebounce } from 'use-lodash-debounce'

const SearchCompany = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedValue = useDebounce(searchTerm, 800)

    const [loading, response, , ] = useFetch({
        url: `https://financialmodelingprep.com/api/v3/profile/${debouncedValue}?apikey=8327ec1c069c0506c3afd50c58922238`
    }, [debouncedValue])    

    const onSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    return (
        <>
            <h2 className="mx-auto mt-5">
                Kapitus Test App
            </h2>
            <div className="my-3">
                <input
                    className="form-control"
                    id="stock-symbol"
                    type="text"
                    value={ searchTerm }
                    onChange={ onSearchChange }
                    placeholder="Please type company stock symbol"
                    aria-label="Please type company stock symbol"
                />
            </div>
            { loading &&
                <div 
                    className="spinner-border text-primary" 
                    id="spinner" 
                    role="status"
                >
                    <span className="sr-only">Loading...</span>
                </div>
            }
            {!loading && response && response[0] &&
                (
                    <Card profile={ response[0] } />
                )
            }
        </>
    )
}

export default SearchCompany