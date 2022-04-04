import { Navigate } from 'react-router-dom'

function Dashboard() {
  const shouldRedirect = true

  return (
    <div className="Dashboard">
      {shouldRedirect && <Navigate replace to="/login" />}
      <h1>DashBoard</h1>
    </div>
  )
}

export default Dashboard
