import React from 'react'
import { Header } from '../components/header'
import styled from '@emotion/styled'
import { Colors } from '../parameters/styles'
import { ContentContainer } from '../parameters/ui'
import { AlbumsContextProvider } from '../context/albumsContext'
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <AlbumsContextProvider>
                <BodyContainer>
                    <Header />
                        <ContentContainer>
                            <Component {...pageProps} />
                        </ContentContainer>
                </BodyContainer>
            </AlbumsContextProvider>
        </>
    )
}

export default App

export const BodyContainer = styled.div`
    background-color: ${Colors.BACKGROUND_GREY};
    min-height: 100vh;
    box-sizing: border-box;
`