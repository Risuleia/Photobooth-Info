import { NavLink } from 'react-router-dom'
import './styles.css'

export default function Nav() {
  return (
    <div id="nav">
      <NavLink to="/faq" className="nav-link">FAQ</NavLink>
      <NavLink to="/how-to-use" className="nav-link">How to Use</NavLink>
      <NavLink to="/support" className="nav-link">Support</NavLink>
      <NavLink to="/cashback" className="nav-link">Cashback Policy</NavLink>
    </div>
  )
}
