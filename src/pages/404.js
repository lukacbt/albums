import React from 'react'
import styled from '@emotion/styled'
import { GoBack } from '../components/common/GoBack'
import { Colors } from '../parameters/styles'

const Error = () => {
    return (
        <ErrorWrapper>
            <ErrorTitle>404 Not Found</ErrorTitle>
            <ErrorSubtitle>Ooops, something went wrong!</ErrorSubtitle>
            <GoBack route="/" text="Go back to homepage" />
        </ErrorWrapper>
    )
}

export const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
`

export const ErrorTitle = styled.h1`
    font-family: WorkSansBold;
    font-size: 48px;
    color: ${Colors.TITLE_BLACK};
    margin-bottom: 32px;
`

export const ErrorSubtitle = styled.h1`
    font-family: WorkSansMedium;
    font-size: 36px;
    color: ${Colors.SUBTITLE_GREY};
    margin-bottom: 32px;
`

export default Error
