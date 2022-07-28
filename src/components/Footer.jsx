import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { style } from '@mui/system';
import MailOutlined from '@mui/icons-material/MailOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection:"column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px ;
`

const Logo =styled.h1``
const Desc =styled.p`
    margin: 20px 0px;    
`
const SocailConatiner =styled.div`
    display: flex;
    
`
const SocailIcon =styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${ props => props.color } ;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display:"none" })}
`
const Title =styled.h3`
    margin-bottom: 20px;
`

const List = styled.ul`
    marigin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor:"#fff8f8" })}
`
const ContactItem =styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Payment=styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ANI.</Logo>
            <Desc>
            There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <SocailConatiner>
                <SocailIcon color="3B5999" >
                    <FacebookIcon/>
                </SocailIcon>
                <SocailIcon color="E4405F" >
                    <InstagramIcon/>
                </SocailIcon>
                <SocailIcon color="55ACEE" >
                    <TwitterIcon/>
                </SocailIcon>
                <SocailIcon color="E60023" >
                    <PinterestIcon/>
                </SocailIcon>
            </SocailConatiner>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <RoomIcon style={{marginRight: "10px"}} /> Golden Mile Rd, Kokapet, Hyderabad, Telangana 500075</ContactItem>
            <ContactItem> <PhoneIcon style={{marginRight: "10px"}} /> +91 235 903 7552</ContactItem>
            <ContactItem> <MailOutlinedIcon style={{marginRight: "10px"}} /> contact@ani.tech.in</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer