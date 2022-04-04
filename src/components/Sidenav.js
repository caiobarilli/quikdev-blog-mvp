import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <ul>
      <li>
        <Link to="/dashboard">DashBoard</Link>
      </li>
      <li>
        <Link to="/new-post">Novo post</Link>
      </li>
    </ul>
  )
}

export default Sidenav
