import React, { SyntheticEvent } from 'react'

interface Props {
    onPortfolioDelete:(e:SyntheticEvent)=>void;
    portfolioValue:string
}

const DeletePortfolio = (props: Props) => {
  return (
    <div>
      <form action="submit" onSubmit={props.onPortfolioDelete}>
        <input type="text" hidden={true} value={props.portfolioValue}></input>
        <button>x</button>
        </form>  

    </div>
  )
}

export default DeletePortfolio