import { PATHS, useNavigate } from "../../router" 
import './Navbar.css'

export const Navbar = () => {

  const { navigate } = useNavigate()
  const handleChangeRoute = ( evt ) => {
    navigate( evt.target.title )
  }

  return (
    <>
      <div className='navbar'>
        <span>Ruta actual</span>
          <button className="navbar_btn" title={PATHS.home} onClick={ handleChangeRoute }>
            Home
          </button>
          <button className="navbar_btn" title={PATHS.experience} onClick={ handleChangeRoute }>
            Experience 1
          </button>
          <button className="navbar_btn" title={PATHS.experience2} onClick={ handleChangeRoute }>
            Experience 2
          </button>
      </div>
    </>
  )
}
