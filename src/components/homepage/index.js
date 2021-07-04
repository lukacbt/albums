import React from 'react'
import { Album } from '../albums'
import { Loader } from '../common/Loader'

export const HomePage = ({albums, updateAlbums}) => {
    return albums.length
        ?
        albums.map(album =>
            <Album
                artistName={album.artist.name}
                artistId={album.artist.id}
                key={album.id}
                updateAlbums={updateAlbums}
                {...album}
            />
        )
        :
        <Loader />
}
