import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

interface Props {
  onClick : (e:React.MouseEvent<HTMLButtonElement>) =>void;
  search: string | undefined ;
  handleEvent :(e:ChangeEvent<HTMLInputElement>) =>void; 


}

const Search:React.FC<Props> = (props: Props): JSX.Element => {
  

    return (
    <div>
        <input type="text" value={props.search} placeholder="Search" onChange={props.handleEvent}></input>
       
    <button onClick ={props.onClick}>Click me</button>

    </div>
  )
}

export default Search;