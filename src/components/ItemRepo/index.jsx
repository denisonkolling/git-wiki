import React from 'react'
import { ItemContainer, RemoveButton } from './styles'

const ItemRepo = ({repo, handleRemove }) => {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank">Ver repositório</a><br />
      <RemoveButton onClick={()=>handleRemove(repo.id)}>Remover</RemoveButton>
      <hr />
      
      </ItemContainer>
  )
}

export default ItemRepo