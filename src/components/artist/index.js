import React from 'react'
import { Album } from '../albums'
import { Loader } from '../common/Loader'

export const Artist = ({ artist, updateAlbums }) => {

    return (
        artist.albums
        ?
        artist.albums.map(album =>
            <Album
                key={album.id}
                artistName={artist.name}
                artistId={artist.id}
                updateAlbums={updateAlbums}
                {...album}
            />)
        : <Loader />
    )
}