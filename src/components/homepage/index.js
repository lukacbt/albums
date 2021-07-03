import React, { useContext } from 'react'
import { useArtistAlbums } from '../../hooks/useArtistAlbums'
import { Album } from '../albums'
import { AlbumsContext } from '../../context/albumsContext'
import { Loader } from '../common/Loader'

export const HomePage = () => {
    const { artistAlbums } = useContext(AlbumsContext)
    const { updateAlbums } = useArtistAlbums('albums')

    return artistAlbums.length
        ?
        artistAlbums.map(album =>
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
