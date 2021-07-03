import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { DEFAULT_LIMIT } from '../parameters/constants'
import { AlbumsContext } from '../context/albumsContext'

export const useArtistAlbums = (fetchingItem) => {
    const [ update, setUpdate ] = useState(0)
    const { setArtistAlbums } = useContext(AlbumsContext)

    const router = useRouter()

    useEffect(() => {
        if(!router.isReady) return;
        fetchAlbums()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [update, router.isReady, router.pathname])

    const chooseRoute = () => {
        const artistId = router.query.id
        const limit = router.query.limit || DEFAULT_LIMIT
        switch(fetchingItem) {
            case 'albums':
                return `http://localhost:3000/albums?_limit=${limit}&_expand=artist`
            case 'artist':
                return `http://localhost:3000/artists/${artistId}?_embed=albums`
        }
    }

    const fetchAlbums = () => {
        fetch(chooseRoute())
            .then(res => res.json())
            .then(data => setArtistAlbums(data))
            .catch(err => console.log(err))
    }

    const updateAlbums = () => {
        setUpdate(prev => prev + 1)
    }

    return { updateAlbums }
}