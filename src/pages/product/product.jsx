import { Link, useParams } from 'react-router-dom'
import data from '../../../public/data'
import Header from '../../header/Header'
import './product.css'

function product() {
    const {id}=useParams()
  return (
    <div>
      <Header></Header>
      <div className='a'>
<h1>mahsulot</h1>
<button><Link to="/">back</Link></button>
<div className="b">
<img src={data[id].img[2]} alt="" />
<div className='info'>
    <h2>{data[id].name}</h2>
    <h2>{data[id].description}</h2>
    <h4>{data[id].price}</h4>
</div>

</div>
      </div>


    </div>
  )
}

export default product
