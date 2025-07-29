import './home.css'
import Header from '../../header/Header'
import Card from '../../card/Card'
import data from '../../../public/data'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      
<Header></Header>
<main>
  <section className="hero">
  {data.map((mah,i)=>{
    return <Link to={'/product/'+i}><Card mahsulot={mah} key={i}></Card></Link>
  })}
  </section>
</main>


    </div>
  )
}

export default App
