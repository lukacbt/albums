import React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { useRouter } from 'next/router'
import { useFetchAlbums } from '../../../hooks/useFetchAlbums'
import { ArtistAlbumsConstants } from '../../../parameters/constants'
import { SearchUI } from './SearchUI'

export const Search = () => {
    const [ inputValue, setInputValue ] = useState('')
    const [ allAlbums, setAllAlbums ] = useState([])
    const [ filteredAlbums, setFilteredAlbums ] = useState([])
    const { fetchAlbums } = useFetchAlbums(ArtistAlbumsConstants.ALBUMS)
    const router = useRouter()

    useEffect(() => {
        fetch('http://localhost:3000/albums')
        .then(res => res.json())
        .then(data => {
            setAllAlbums(data)
            setFilteredAlbums([...data])
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        let query = Object.assign({}, router.query)
        router.push(formatQueryParams(query))
        handleFetching()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query.q])

    const handleChange = (e) => {
        setInputValue(e.target.value)
        const searchAlbums = allAlbums.filter(album => album.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredAlbums(searchAlbums)
        router.query.q = e.target.value
    }
    
    const handleFetching = debounce(() => {
        fetchAlbums()
    }, 500)

    const formatQueryParams = (queryObject) => {
        let queryParams = Object.keys(queryObject).length ? '?' : ''
        Object.entries(queryObject).forEach(([key, value]) => {
            queryParams = queryParams + (value ? `${key}=${value}` : '') + '&'
        })
        return queryParams
    }

    const handleSelect = (e) => {
        router.query.q = e.target.dataset.name
        setFilteredAlbums([...allAlbums])
        setInputValue('')
    }

    return (
        <SearchUI
            handleSelect={handleSelect}
            handleChange={handleChange}
            filteredAlbums={filteredAlbums}
            inputValue={inputValue}
        />
    )
}
