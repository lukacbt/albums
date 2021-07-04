import React, { createContext, useState } from 'react'

export const AlbumsContext = createContext()

export const AlbumsContextProvider = (props) => {
    const [ albums, setAlbums ] = useState([])
    const [ artist, setArtist ] = useState({})

    return (
        <AlbumsContext.Provider value={{ albums, setAlbums, artist, setArtist }}>
            {props.children}
        </AlbumsContext.Provider>
    )
}
