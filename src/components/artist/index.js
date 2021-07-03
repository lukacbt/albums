import React, { useContext } from 'react'
import { AlbumsContext } from '../../context/albumsContext'
import { useArtistAlbums } from '../../hooks/useArtistAlbums'
import { Album } from '../albums'
import { Loader } from '../common/Loader'

export const Artist = () => {
    const { artistAlbums } = useContext(AlbumsContext)
    const { updateAlbums } = useArtistAlbums('artist')

    return (
        artistAlbums.albums
        ?
        artistAlbums.albums.map(album =>
            <Album
                key={album.id}
                artistName={artistAlbums.name}
                artistId={artistAlbums.id}
                updateAlbums={updateAlbums}
                {...album}
            />)
        : <Loader />
    )
}