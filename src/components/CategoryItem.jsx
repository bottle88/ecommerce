import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
  flex:1;
  height: 70vh;
  margin: 3px;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
`
const Info = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: orange;
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  font-weight: 600px;
  cursor: pointer;


`

const CategoryItem = ({item}) => {
  return (
    <Container>
         {/* Instead of src="" , we use scipt so src={}  */}
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem