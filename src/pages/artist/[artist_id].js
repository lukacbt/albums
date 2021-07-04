import React, { useContext } from 'react'
import { Artist } from '../../components/artist'
import { useArtistAlbums } from '../../hooks/useArtistAlbums'
import { AlbumsContext } from '../../context/albumsContext'
import { ArtistAlbumsConstants } from '../../parameters/constants'
import { PageContainer } from '../../parameters/ui'

const ArtistPage = () => {
    const { artist } = useContext(AlbumsContext)
    const { updateAlbums } = useArtistAlbums(ArtistAlbumsConstants.ARTIST)

    return (
        <PageContainer>
            <Artist artist={artist} updateAlbums={updateAlbums} />
        </PageContainer>
    )
}


export default ArtistPage

