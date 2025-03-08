import { useState, useEffect } from 'react';
import './Loginpage.css';
import PropTypes from 'prop-types';

function LoginPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1005711/pexels-photo-1005711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundColor = "#f0f8ff";
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter valid credentials');
      return;
    }

    if (email === 'ugaurav805@gmail.com' && password === 'password') {
      onLogin();
      if (rememberMe) {
        localStorage.setItem('email', email);
      }
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    alert('Signup successful! You can now log in.');
    setIsLogin(true);
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={isLogin ? handleLogin : handleSignup}>
        <div>
          <input
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {!isLogin && (
          <div>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? (
          <>
            Don&apos;t have an account? <a href="#" onClick={() => setIsLogin(false)}>Sign Up</a>
          </>
        ) : (
          <>
            Already a member? <a href="#" onClick={() => setIsLogin(true)}>Login</a>
          </>
        )}
      </p>
      <p>
        <a href="#">Forgot password?</a>
      </p>
    </div>
  );
}
LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;