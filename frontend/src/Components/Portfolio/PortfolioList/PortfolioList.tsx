import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortFolio/CardPortfolio';
import {v4 as uuidv4} from 'uuid';

interface Props {
  portfolioValues: string[]
  onPortfolioDelete:(e:SyntheticEvent)=>void,

}

const PortfolioList : React.FC<Props> = (props: Props) : JSX.Element => {
  return (
  <>
  <h3>My Portfolio</h3>
  <ul>
    {
      props.portfolioValues && props.portfolioValues.map((portfolioValue)=>{
        return <CardPortfolio key={portfolioValue} id={uuidv4()} portfolioValue={portfolioValue} onPortfolioDelete={props.onPortfolioDelete}/>
      }

      )
    }
  </ul>
  </>
  )
}


export default PortfolioList;