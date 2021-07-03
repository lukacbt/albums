import React, { createContext, useState } from 'react'

export const AlbumsContext = createContext()

export const AlbumsContextProvider = (props) => {
    const [ artistAlbums, setArtistAlbums ] = useState([])

    return (
        <AlbumsContext.Provider value={{artistAlbums, setArtistAlbums}}>
            {props.children}
        </AlbumsContext.Provider>
    )
}
