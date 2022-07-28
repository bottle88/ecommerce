import React from 'react'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container=styled.div``
const Wrapper=styled.div`
    padding: 20px;
    ${mobile({ padding:"10px" })}

`
const Title=styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`
const TopButton=styled.button`
padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${ props=> props.type === "filled" && "none" };
    background-color: ${ props=> props.type === "filled" ? "black" : "transparent" };
    color: ${ props=> props.type === "filled" && "white" };

`
const TopTexts =styled.div`
    ${mobile({ display:"none" })}
`
const TopText =styled.span`
    text-decoration: underline;
    margin: 0px 10px;
    cursor: pointer;
`

const Bottom=styled.div`
    display: flex;
    // align-items: center;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const Info=styled.div`
    flex: 3;

`

const Product=styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

`
const ProductDetail=styled.div`
    flex: 2;
    display: flex;
    

`
const Image=styled.img`
    width: 200px;

`
const Details=styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px; 
    ${mobile({ padding:"10px" })}
`
const ProductName=styled.span``
const ProductId=styled.span``
const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${ props=> props.color };

`
const ProductSize=styled.span``
const PriceDetail=styled.div`
    flex: 1;
    // background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    `
    
const AmountContainer =styled.div`
    display: flex;
    // background-color: orange;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount =styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice =styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ margin: "20px" })}
`
const Hr =styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary=styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle =styled.h1`
    font-weight: 200;
`
const SummaryItems =styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${ props => props.type === "total" && "600" };
    font-size: ${ props => props.type === "total" && "24px" };
`
const SummaryItemText =styled.span``
const SummaryItemPrice =styled.span``
const Button =styled.button`
    width: 100%;
    background-color: black;
    color: white;
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
         <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled" >CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            <Details>
                                <ProductName><b>Product: </b>JESSE THUNDER SHOES</ProductName>
                                <ProductId><b>ID: </b>23909248327</ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Size: </b>8</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <AmountContainer>
                                <Remove/>
                                <ProductAmount>2</ProductAmount>
                                <Add/>
                            </AmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                            <Details>
                                <ProductName><b>Product: </b>HAKURA T-SHIRT</ProductName>
                                <ProductId><b>ID: </b>239442348327</ProductId>
                                <ProductColor color="gray" />
                                <ProductSize><b>Size: </b>S</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <AmountContainer>
                                <Remove/>
                                <ProductAmount>4</ProductAmount>
                                <Add/>
                            </AmountContainer>
                            <ProductPrice>$ 25</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItems>
                        <SummaryItemText>SUBTOTAL</SummaryItemText>
                        <SummaryItemPrice>$ 160</SummaryItemPrice>
                    </SummaryItems>
                    <SummaryItems>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>$ -16</SummaryItemPrice>
                    </SummaryItems>
                    <SummaryItems>
                        <SummaryItemText>Shipping Charges</SummaryItemText>
                        <SummaryItemPrice>$ 10.23</SummaryItemPrice>
                    </SummaryItems>
                    <SummaryItems type="total" >
                        <SummaryItemText  >TOTAL</SummaryItemText>
                        <SummaryItemPrice >$ 154.23</SummaryItemPrice>
                    </SummaryItems>
                    <Button>PAY NOW</Button>
                </Summary>
            </Bottom>
         </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart