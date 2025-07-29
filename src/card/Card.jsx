import './card.css'

function Card(props) {
  return (
    <div className='card'>
      <img src={props.mahsulot.img[1]} alt="" />
        <h3>{props.mahsulot.name}</h3>
        <h2>narhi:{props.mahsulot.price}</h2>
    </div>
  )
}

export default Card
