import React, { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { ContentContainer } from '../../parameters/ui'
import { Colors } from '../../parameters/styles'
import { Search } from './Search'
import { useRouter } from 'next/router'
import { AlbumsContext } from '../../context/albumsContext'
import { GoBack } from '../common/GoBack'

export const Header = () => {
    const [path, setPath] = useState('')
    const router = useRouter()
    const { artistAlbums } = useContext(AlbumsContext)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (!router.isReady) return
        setPath(router.pathname)
    })

    return (
        <FlexContainer>
            <HeaderWrapper>
                <Title>{artistAlbums.name || 'Album list'}</Title>
                {
                    path === '/'
                    ?
                    <Search />
                    :
                    <GoBack isHeader text="Go back" />
                }
            </HeaderWrapper>
        </FlexContainer>
    )
}

export const FlexContainer = styled.div`
    background-color: ${Colors.WHITE};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.183679);
`

export const HeaderWrapper = styled(ContentContainer)`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.876px;
    color: ${Colors.TITLE_BLACK};
    font-family: WorkSansMedium, sans-serif;
`
