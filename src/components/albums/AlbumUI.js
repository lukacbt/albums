import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Colors, mediaQuery } from '../../parameters/styles'
import { FavoriteIcon } from '../icons'

export const AlbumUI = ({ favorite, imageUrl, title, price, artistId, artistName, releaseYear, handleFavorite, buttonText }) => {

    return (
        <AlbumContainer>
            <AlbumImageWrapper isFavorite={favorite}>
                <FavoriteIcon />
                <AlbumImage src={imageUrl} alt={`Album - ${title}`} />
            </AlbumImageWrapper>
            <TitleHolder>
                <AlbumTitle>{title}</AlbumTitle>
                <Link href={`/artist/${artistId}`} passHref>
                    <ArtistName>{artistName}</ArtistName>
                </Link>
            </TitleHolder>
            <FlexRight>
                <ValueGrey>
                    Released: <Value>{releaseYear}</Value>
                </ValueGrey>
                <Value>{price}</Value>
                <FavoriteButton isFavorite={favorite} onClick={handleFavorite}>{buttonText()}</FavoriteButton>
            </FlexRight>
        </AlbumContainer>
    )
}

export const AlbumContainer = styled.div`
    min-height: 90px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 16px 20px;
    box-shadow: 0px 1px 3px #E7E7E7;
    background-color: ${Colors.WHITE};
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    ${mediaQuery.mobile} {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const AlbumImageWrapper = styled.div`
    position: relative;
    display: flex;
    margin-right: 23px;
    & > svg {
        display: ${({ isFavorite }) => isFavorite ? 'block' : 'none'};
        position: absolute;
        right: -9px;
        top: -9px;
    }
`

export const AlbumImage = styled.img`
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 4px;
`

export const TitleHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 43%;
    padding: 2px 20px 4px 0;
    box-sizing: border-box;
    ${mediaQuery.mobile} {
        margin: 5px 0 15px;
        width: 100%;
        padding-right: 0;
    }
`

export const AlbumTitle = styled.h3`
    font-family: WorkSansMedium;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.657px;
    color: ${Colors.TITLE_BLACK};
	-webkit-line-clamp: 1;
	overflow: hidden;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	word-break: break-word;
    ${mediaQuery.mobile} {
        margin-bottom: 5px;
    }
`

export const ArtistName = styled.span`
    width: fit-content;
    font-family: WorkSansRegular;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.438px;
    text-transform: uppercase;
    color: ${Colors.SUBTITLE_GREY};
    cursor: pointer;
    transition: 0.4s ease-out all;
    &:after {
        content: '';
        display: block;
        transform: scaleX(0);
        transform-origin: left;
        height: 1px;
        background-color: ${Colors.SUBTITLE_GREY};
        transition: 0.4s ease-out all;
    }
    &:hover {
        color: ${Colors.TITLE_BLACK};
        &:after {
            transform: scaleX(1);
            background-color: ${Colors.TITLE_BLACK};
        }
    }
`

export const Value = styled.span`
    color: ${Colors.BLACK};
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.511px;
    font-family: WorkSansRegular;
`

export const ValueGrey = styled(Value)`
    color: ${Colors.SUBTITLE_GREY};
`

export const FavoriteButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 25px;
    border-radius: 3px;
    ${({ isFavorite }) => 
        isFavorite
        ?
        `
        background-color: ${Colors.WHITE};
        color: ${Colors.BLUE};
        border: 1px solid ${Colors.WHITE};
        font-family: WorkSansRegular;
        text-transform: unset;
        text-decoration: underline;
        `
        :
        `
        background-color: ${Colors.BLUE};
        color: ${Colors.WHITE};
        border: 1px solid ${Colors.BLUE};
        font-family: WorkSansBold;
        text-transform: uppercase;
        `
    }
    font-size: 10px;
    cursor: pointer;
    transition: 0.3s ease-out all;
    &:hover {
        background-color: ${Colors.WHITE};
        color: ${Colors.BLUE};
    }
    ${mediaQuery.mobile} {
        border: 1px solid ${Colors.BLUE};
        text-decoration: none;
    }
`

export const FlexRight = styled.div`
    display: flex;
    flex: auto;
    justify-content: space-between;
    align-items: center;
    ${mediaQuery.mobile} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        span {
            margin-bottom: 10px;
        }
    }
`
