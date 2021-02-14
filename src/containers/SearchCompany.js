import React, { useRef } from "react"

const SearchCompany = () => {
    const searchRef = useRef()
    const onSearchChange = event => {
        
    }
    return (
        <>
            <input ref={searchRef} />
        </>
    )
}

export default SearchCompany