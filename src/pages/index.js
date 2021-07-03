import React from 'react'
import { HomePage } from '../components/homepage'
import styled from '@emotion/styled'

const Index = () => {
    return (
        <IndexContainer>
            <HomePage />
        </IndexContainer>
  )
}

export default Index


export const IndexContainer = styled.div`
    padding: 50px 0 80px;
`