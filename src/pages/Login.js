import { useRef, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function Login() {
  const [login, setLogin] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  useEffect(() => {
    if (login) {
      window.FakerApi.get('/me', {})
        .then((result) => setRedirect(result['success']))
        .catch((error) => setRedirect(error['success']))
    }
  }, [login])

  const onSubmitHandle = (event) => {
    event.preventDefault()

    let formIsValid =
      emailInputRef.current.value !== '' &&
      passwordInputRef.current.value !== ''

    formIsValid &&
      window.FakerApi.post('/login', {
        username: emailInputRef.current.value,
        password: passwordInputRef.current.value
      })
        .then((result) => setLogin(result['success']))
        .catch((error) => setLogin(error['success']))
  }

  return redirect ? (
    <Navigate replace to="/dashboard" />
  ) : (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Entrar na conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmitHandle}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
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
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
