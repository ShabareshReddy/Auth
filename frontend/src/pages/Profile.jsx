import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API, { setAuthToken } from '../api';

const Profile=()=> {
  const [user, setUser] = useState({});
  const [updateData, setUpdateData] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    setAuthToken(token);
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
  const res = await API.get('/profile');
      setUser(res.data);
    } catch (err) {
      alert('Error loading profile');
    }
  };

  const handleUpdate = async () => {
    try {
  const res = await API.put('/profile', updateData);
      alert(res.data.message);
      fetchProfile();
    } catch (err) {
      alert('Update failed');
    }
  };

  const handleDelete = async () => {
    try {
  const res = await API.delete('/profile');
      alert(res.data.message);
      localStorage.removeItem('token');
      setAuthToken(null);
  navigate('/signup');
    } catch (err) {
      alert('Delete failed');
    }
  };

  return (
    <div className="container">
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h3>Update</h3>
      <input placeholder="New Name" onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })} />
      <input type="password" placeholder="New Password" onChange={(e) => setUpdateData({ ...updateData, password: e.target.value })} />
      <button onClick={handleUpdate}>Update</button>

      <h3>Delete Account</h3>
      <button style={{ background: 'red', color: '#fff' }} onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default Profile;
