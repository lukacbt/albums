import { useContext } from 'react'
import { useRouter } from 'next/router'
import { ArtistAlbumsConstants, DEFAULT_LIMIT } from '../parameters/constants'
import { AlbumsContext } from '../context/albumsContext'

export const useFetchAlbums = (fetchingItem) => {
    const { setAlbums, setArtist } = useContext(AlbumsContext)
    const router = useRouter()

    const chooseRoute = () => {
        const artistId = router.query.artist_id
        const limit = router.query.limit || DEFAULT_LIMIT
        const filter = router.query.q || ''
        switch(fetchingItem) {
            case ArtistAlbumsConstants.ALBUMS:
                return `http://localhost:3000/albums?_limit=${limit}&_expand=artist${filter && `&title_like=${filter}`}`
            case ArtistAlbumsConstants.ARTIST:
                return `http://localhost:3000/artists/${artistId}?_embed=albums`
        }
    }

    const fetchAlbums = () => {
        fetch(chooseRoute())
            .then(res => res.json())
            .then(data => {
                if (fetchingItem === ArtistAlbumsConstants.ARTIST) {
                    setArtist(data)
                } else if (fetchingItem === ArtistAlbumsConstants.ALBUMS) {
                    setAlbums(data)
                }
            })
            .catch(err => console.log(err))
    }

    return { fetchAlbums }
}