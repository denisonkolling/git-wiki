import React from 'react'
import { ItemContainer } from './styles'

const ItemRepo = () => {
  return (
    <ItemContainer>
      <h3>Denison</h3>
      <p>dio-git-wiki</p>
      <a href="#">Visitar</a><br />
      <a href="#" className='remover'>Remover</a>
      <hr />
      
      </ItemContainer>
  )
}

export default ItemRepo