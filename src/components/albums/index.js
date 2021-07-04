import React from 'react'
import { useMoment } from '../../hooks/useMoment'
import { AlbumUI } from './AlbumUI'

export const Album = ({ artistName, artistId, updateAlbums, ...albumInfo }) => {
    const { id, favorite, price, releaseDate, imageUrl, title } = albumInfo
    const releaseYear = useMoment(releaseDate)

    const handleFavorite = () => {
        fetch(`http://localhost:3000/albums/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                id,
                title,
                imageUrl,
                releaseDate,
                artistId,
                price,
                favorite: !favorite
            })
        })
        .then(updateAlbums())
        .catch(err => console.log(err))
    }

    const buttonText = () => favorite ? 'Remove favorite' : 'Mark As Favorite'

    return (
        <AlbumUI
            artistName={artistName}
            artistId={artistId}
            {...albumInfo}
            buttonText={buttonText}
            handleFavorite={handleFavorite}
            releaseYear={releaseYear}
        />
    )
}
