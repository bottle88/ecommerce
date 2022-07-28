import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color: teal;
    padding: 10px 0px 5px 0px;
    border: 1px solid grey;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 800;
`
const Para =styled.div`
    cursor: pointer;
`

const Announcements = () => {
  return (
    <Container><Para>Bumper offer , Upto 70% off on Top Brands </Para> </Container>
  )
}

export default Announcements