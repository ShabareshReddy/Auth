
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signup from '../pages/signup'
import Login from '../pages/Login'
import Profile from '../pages/Profile'

const App=()=>{
    return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;