import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API, { setAuthToken } from '../api';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', form);
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setAuthToken(res.data.token);
        navigate('/profile');
      } else {
        setMsg('Login failed');
      }
    } catch (err) {
      setMsg(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      {msg && <p className="message">{msg}</p>}

      <p className="login-text">
        New user?{' '}
        <Link to="/signup" className="login-link">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
