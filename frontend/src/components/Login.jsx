import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
      } else {
        // Save token in localStorage or state
        localStorage.setItem('token', data.token);
        // onLogin(data.email);
        navigate('/main');
      }
    } catch (err) {
      console.log(err);
      setError('Network error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form onSubmit={handleSubmit} className="max-w-sm w-full p-6 bg-white rounded shadow">
    <h2 className="text-2xl mb-4 text-center">Login</h2>
    {error && <div className="text-red-500 mb-2">{error}</div>}
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      required
      className="w-full p-2 mb-4 border rounded"
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={e => setPassword(e.target.value)}
      required
      className="w-full p-2 mb-4 border rounded"
    />
    <button type="submit" className="w-full bg-accent text-white py-2 rounded">
      Login
    </button>
    <p className="text-sm text-center mt-4">
      Don't have an account?{" "}
      <Link to="/signup" className="text-accent hover:underline">
        Signup
      </Link>
    </p>
  </form>
</div>

  );
}

export default Login;
