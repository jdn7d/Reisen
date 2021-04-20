import { Link } from 'react-router-dom'

export default function NavBar() {

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/destinations">Destinations</Link>
      <Link to="/new">Add Destination</Link>
    </nav>
  )
}