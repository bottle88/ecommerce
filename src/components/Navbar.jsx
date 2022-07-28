import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BadgeIcon from '@mui/icons-material/Badge';
import { Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responsive'


const Container = styled.div`
    height: 60px;
    
  ${mobile({ height: "60px" })}
    
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`


const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  
`

const Language= styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`

const SearchContainer= styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: centre;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "5px" })}
  
`
const Input = styled.input`
  border: none;
  ${mobile({ width: "60px" })}
  
`

const Centre = styled.div`

  flex: 1;
  text-align: center;


`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`


const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ justifyContent: "center" , flex: "2" })}

`
const MenuItem =styled.div`
  font-weight: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ marginLeft: "10px" , fontSize: "12px" })}
  
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                   <Input placeholder="Search"  />
                   <SearchOutlinedIcon style={{ color: "gray" , fontSize: 16 }} />
                </SearchContainer>
            </Left>
            <Centre>
              <Logo>ANI.</Logo>
            </Centre>
            <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
                <Badge badgeContent={2} color="primary" >
                <ShoppingCartOutlinedIcon/>
                </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar