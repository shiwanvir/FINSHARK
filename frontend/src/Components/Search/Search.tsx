import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

interface Props {
  onSearchSubmit : (e:SyntheticEvent) =>void;
  search: string | undefined ;
  handleSearchChange :(e:ChangeEvent<HTMLInputElement>) =>void; 


}

const Search:React.FC<Props> = (props: Props): JSX.Element => {
  

    return (
  <>
  <form onSubmit={props.onSearchSubmit}>
    <input type="text" value={props.search} onChange={props.handleSearchChange} placeholder='Search...' />
  </form>
  </>
  )
}

export default Search;