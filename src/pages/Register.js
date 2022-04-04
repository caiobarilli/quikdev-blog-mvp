import { useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'

function Register() {
  const [registered, setRegistered] = useState(false)
  const [alreadyRegistered, setAlreadyRegistered] = useState(false)

  let usernameInputRef = useRef()
  let emailInputRef = useRef()
  let passwordInputRef = useRef()

  const onSubmitHandle = (event) => {
    event.preventDefault()

    let formIsValid =
      usernameInputRef.current.value !== '' &&
      emailInputRef.current.value !== '' &&
      passwordInputRef.current.value !== ''

    formIsValid &&
      window.FakerApi.post('/register', {
        name: usernameInputRef.current.value,
        username: emailInputRef.current.value,
        password: passwordInputRef.current.value
      })
        .then((result) => setRegistered(result['success']))
        .catch(
          (error) => setRegistered(error['success']),
          setAlreadyRegistered(true)
        )
  }

  const content = !registered ? (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Cadastre sua conta
        </h2>

        {alreadyRegistered && registered && (
          <p>
            O email <strong> {emailInputRef.current.value} </strong> já foi
            cadastrado
          </p>
        )}
      </div>
      <form className="mt-8 space-y-6" onSubmit={onSubmitHandle}>
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="username" className="sr-only">
              Nome de usuário
            </label>
            <input
              ref={usernameInputRef}
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Nome de usuário"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              E-mail
            </label>
            <input
              ref={emailInputRef}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="E-mail"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <input
              ref={passwordInputRef}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Senha"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  ) : (
    <Navigate replace to="/login" />
  )

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {content}
    </div>
  )
}

export default Register
