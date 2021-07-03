import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Colors } from '../../parameters/styles'

const spin = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
`

export const Loader = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 8px double ${Colors.BLUE};
    border-color: ${Colors.BLUE} transparent;
    animation: ${spin} 1.2s infinite linear;
    margin: 0 auto;
`
