import React, { useContext } from 'react'
import { HomePage } from '../components/homepage'
import { AlbumsContext } from '../context/albumsContext'
import { useArtistAlbums } from '../hooks/useArtistAlbums'
import { ArtistAlbumsConstants } from '../parameters/constants'
import { PageContainer } from '../parameters/ui'

const Index = () => {
    const { albums } = useContext(AlbumsContext)
    const { updateAlbums } = useArtistAlbums(ArtistAlbumsConstants.ALBUMS)

    return (
        <PageContainer>
            <HomePage albums={albums} updateAlbums={updateAlbums} />
        </PageContainer>
  )
}

export default Index
