import { Navigate } from 'react-router-dom'

function CreatePost() {
  const shouldRedirect = true

  return (
    <div className="CreatePost">
      {shouldRedirect && <Navigate replace to="/login" />}
      <h1>Novo Post</h1>
    </div>
  )
}

export default CreatePost
