
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info= styled.div`
    opacity: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`

const Container= styled.div`
    margin: 5px;
    flex: 1;
    min-width: 300px;
    height: 350px;
    background-color: #f5fbfd;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`
const Circle= styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    position: absolute;
    border-radius: 50%;

`
const Image= styled.img`
    height: 75%;
    z-index: 2;
`

const Icon= styled.div`
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`


const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product