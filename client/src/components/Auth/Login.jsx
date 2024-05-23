import React from 'react'

const Login = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
  
    const handleEmailChange = e => {
      setEmail(e.target.value)
    }
  
    const handlePasswordChange = e => {
      setPassword(e.target.value)
    }
  
    const handleSubmit = e => {
      e.preventDefault()
      // Handle form submission here
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Login
          </button>
          <a href="#" className="text-gray-500 font-medium">
            Register
          </a>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login;