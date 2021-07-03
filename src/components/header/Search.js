import React from 'react'
import styled from '@emotion/styled'

export const Search = () => {
    return <SearchUI placeholder="Search" />
}

export const SearchUI = styled.input`
    box-sizing: border-box;
    max-width: 420px;
    width: 100%;
    border-radius: 4px;
    border: 0;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.5);
    padding: 12px 40px 12px 20px;
    outline: none;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.511px;
    font-size: 14px;
    font-family: WorkSansRegular;
    background-image: url(images/Search.svg);
    background-position: calc(100% - 20px) 50%;
    background-repeat: no-repeat;
`
