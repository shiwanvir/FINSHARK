import { CompanySearch } from '../../company';
import Card from '../Card/Card';
import {v4 as uuidv4} from 'uuid';
import { SyntheticEvent } from 'react';

interface Props {
  searchResult:CompanySearch[];
  onPortfolioCreate:(e:SyntheticEvent)=>void;
}

const CardList:React.FC<Props> = ({searchResult,onPortfolioCreate}: Props): JSX.Element => {
  return (
  <>
  {searchResult.length>0 ?(
    searchResult.map((result)=>{
      return(
        <Card id ={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}/>
      )
    })

  ) :(<h1>No Results</h1>)
  
  }
  </>
  )
}

export default CardList;