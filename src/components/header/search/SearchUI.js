import React from 'react'
import styled from '@emotion/styled'
import { Colors, mediaQuery } from '../../../parameters/styles'

export const SearchUI = ({ handleChange, inputValue, filteredAlbums, handleSelect }) => {

    return (
        <SearchWrapper>
            <SearchInput
                onChange={e => handleChange(e)}
                placeholder="Search"
                value={inputValue}
                inputValue={inputValue}
            />
            <SearchDropdown inputValue={inputValue}>
                <List>
                    {
                        filteredAlbums.map(album => (
                            <ListItem
                                data-name={album.title}
                                onMouseDown={handleSelect}
                                key={album.id}
                                >
                                    {album.title}
                                </ListItem>
                            )
                        )
                    }
                </List>
            </SearchDropdown>
        </SearchWrapper>
    )
}

export const SearchWrapper = styled.div`
    display: flex;
    position: relative;
    max-width: 420px;
    width: 100%;
    ${mediaQuery.mobile} {
        max-width: 210px;   
    }
`

export const SearchInput = styled.input`
    width: 100%;
    box-sizing: border-box;
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
    + div {
        display: none;
    }
    &:focus {
        border-radius:  ${({ inputValue }) => inputValue && '4px 4px 0 0'};
        + div {
            display: ${({ inputValue }) => inputValue ? 'block' : 'none'};
        }
    }
`

export const SearchDropdown = styled.div`
    position: absolute;
    z-index: 2;
    top: 100%;
    max-height: 159px;
    width: 100%;
    left: 0;
    background-color: ${Colors.WHITE};
    border-radius: 0 0 4px 4px;
    overflow-y: scroll;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.5);
    &::-webkit-scrollbar {
        display: none;
    }
`

export const List = styled.ul`
    padding: 2px 20px;
`

export const ListItem = styled.li`
    cursor: pointer;
    list-style: none;
    font-family: WorkSansRegular;
    font-size: 16px;
    padding: 4px 0;
    &:not(:last-child) {
        border: 1px solid ${Colors.BLACK};
        border-color: transparent transparent ${Colors.SEARCH_GREY};
    }
    &:hover {
        background-color: ${Colors.BACKGROUND_GREY};
    }
`
