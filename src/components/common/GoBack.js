import React from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { Colors } from '../../parameters/styles'

export const GoBack = ({ text, isHeader, route }) => {
    const router = useRouter()
    const handleBack = () => {
        if (route) {
            router.push(route)
        } else {
            router.back()
        }
    }
    return (
        <BackButton isHeader={isHeader} onClick={() => handleBack()}>
            <ButtonText>{text}</ButtonText>
        </BackButton>
    )
}

export const BackButton = styled.button`
    position: relative;
    min-height: 30px;
    min-width: 120px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background-color: ${({ isHeader }) => isHeader ? Colors.WHITE : Colors.BACKGROUND_GREY};
    border: 1px solid ${({ isHeader }) => isHeader ? Colors.WHITE : Colors.BACKGROUND_GREY};
    font-family: WorkSansMedium;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    transition: 0.4s ease-out all;
    border: 1px solid ${Colors.BLUE};
    &:before {
        content: '';
        position: absolute;
        top: 5px;
        left: -2px;
        height: calc(100% - 10px);
        width: calc(100% + 4px); 
        background-color: ${({ isHeader }) => isHeader ? Colors.WHITE : Colors.BACKGROUND_GREY};
        transform: scaleY(1);
        transition: 0.4s ease-out all;
        transition-delay: 0.5s;
    }
    &:hover:before {
        transform: scaleY(0);
    }
    &:after {
        content: '';
        position: absolute;
        top: -1px;
        left: 10px;
        height: calc(100% + 4px);
        width: calc(100% - 20px); 
        background-color: ${({ isHeader }) => isHeader ? Colors.WHITE : Colors.BACKGROUND_GREY};
        transform: scaleX(1);
        transition: 0.5s ease-out all;
    }
    &:hover:after {
        transform: scaleX(0);
    }
`

export const ButtonText = styled.span`
    color: ${Colors.BLUE};
    position: relative;
    z-index: 3;
`
