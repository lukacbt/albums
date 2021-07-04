import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useFetchAlbums } from './useFetchAlbums'

export const useArtistAlbums = (fetchingItem) => {
    const [ update, setUpdate ] = useState(0)
    const { fetchAlbums } = useFetchAlbums(fetchingItem)

    const router = useRouter()

    useEffect(() => {
        if(!router.isReady) return;
        fetchAlbums()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [update, router.isReady, router.pathname])

    const updateAlbums = () => {
        setUpdate(prev => prev + 1)
    }

    return { updateAlbums }
}