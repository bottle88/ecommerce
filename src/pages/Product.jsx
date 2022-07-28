import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { mobile } from '../responsive'
// import { Button } from '@mui/material'

const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    ${mobile({ padding:"10px" , flexDirection: "column" })}
`
const ImgContainer = styled.div`
    flex: 1;

`
const Image = styled.img`
width: 100%;
height:90vh;
object-fit: cover;
${mobile({ height:"50vh" })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding:"10px" })}
`
const Title = styled.h1`
    font-weight: 200px;
    // ${mobile({ fontSize:"24px" })}
`
const Desc = styled.p`
    padding: 20px 0px ;
`
const Price = styled.span`
    font-weigth: 100px;
    font-size: 40px;
`

const FilterContainer =styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    ${mobile({ width:"100%" })}
`
const Filter =styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle =styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor =styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${ props => props.color } ;
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize =styled.select`
    padding: 5px;
    margin-left: 10px;
`
const FilterSizeOption =styled.option``
const AddContainer =styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width:"100%" })}
`
const AmountContainer =styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount =styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`
const Add =styled.div``
const Remove =styled.div``
const Button =styled.button`
    padding: 15px;
    border: 2px solid teal;
    cursor: pointer;
    font-weight: 500;
    background-color: white;

    &:hover {
        background-color: #f8f4f4;
    }
`



const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumsuite</Title>
                <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.
                </Desc>
                <Price> $20 </Price>
                <FilterContainer>
                   <Filter>
                    <FilterTitle>Color:</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />
                    
                    </Filter>
                    <Filter>
                        <FilterTitle>Size:</FilterTitle>        
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                        
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveOutlinedIcon/>
                        <Amount>1</Amount>
                        <AddOutlinedIcon/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>        
    </Container>
  )
}

export default Product