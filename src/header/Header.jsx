import './header.module.css'

function Header() {
  return (
    <div>
      <header>
      <img src="./public/Logo.png" alt="" />
      <div className="functions">
      <input type="text" placeholder='.....' className='input'/>
      <i className="fa-solid fa-cart-shopping"></i>
      <i className="fa-solid fa-heart"></i>
      <i className="fa-solid fa-user"></i>
      </div>
      </header>
    </div>
  )
}

export default Header
