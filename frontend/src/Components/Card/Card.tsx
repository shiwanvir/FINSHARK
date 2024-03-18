import React from 'react'
import './Card.css';
interface Props {
    companyName:string;
    ticker:string;
    price:number
}
//chnage
const Card:React.FC<Props> = (props: Props):JSX.Element => {
  return (
    <div className='card'>
        <div className='details'>
        <img src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"/>
        <h2>{props.companyName} ({props.ticker})</h2>
        <p>Price: ${props.price}</p>
        </div>
        <p className='info'> 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptates, sed id in porro ut voluptas ullam magnam autem laudantium pariatur placeat doloremque sint aspernatur. Magni voluptatem aspernatur distinctio aut.
        </p>
    </div>
  )
}

export default Card