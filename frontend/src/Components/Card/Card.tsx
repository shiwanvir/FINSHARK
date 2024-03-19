import React, { SyntheticEvent } from 'react'
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio';
import './Card.css';
interface Props {
id:string
searchResult:CompanySearch;
onPortfolioCreate:(e:SyntheticEvent)=>void
}
//chnage
const Card:React.FC<Props> = (props: Props):JSX.Element => {
  return (
    <div className='card'>
        <div className='details'>
        <img alt="company logo"/>
        <h2>{props.searchResult.name} ({props.searchResult.symbol})</h2>
        <p>{props.searchResult.currency}</p>
        </div>
        <p className='info'> 
         {props.searchResult.exchangeShortName} - {props.searchResult.stockExchange} 
        </p>
        <AddPortfolio onPortfolioCreate={props.onPortfolioCreate} symbol={props.searchResult.symbol}/>
    </div>
  )
}

export default Card