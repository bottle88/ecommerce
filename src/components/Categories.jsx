import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import { mobile } from '../responsive'
import CategoryItem from './CategoryItem'


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" ,padding: "0px"})}
`

const Categories = () => {
  return (
    <Container>
      {/* Javascript script below , so use {} */}
      {
        // Props will be {item} for CategoryItem componenet
        categories.map( item => ( <CategoryItem item = {item} key={item.id} /> )  )
      }
    </Container>
  )
}

export default Categories