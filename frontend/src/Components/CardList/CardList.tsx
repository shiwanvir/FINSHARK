import Card from '../Card/Card';

interface Props {}

const CardList:React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Card companyName='Apple' ticker='AAPL' price={100}/>
        <Card companyName='Microsoft' ticker='MSFT' price={250} />
        <Card companyName='Tesla' ticker='TSLA' price={800} />

        
    </div>
  )
}

export default CardList;