import React from 'react'
import { Artist } from '../../components/artist'
import styled from '@emotion/styled'

const ArtistPage = () => (
    <ArtistPageContainer>
        <Artist />
    </ArtistPageContainer>
)

export default ArtistPage

export const ArtistPageContainer = styled.div`
    padding: 50px 0 80px;
`
