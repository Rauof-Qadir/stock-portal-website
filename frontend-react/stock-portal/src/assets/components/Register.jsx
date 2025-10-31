import React from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState({});
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleRegistration =async (e) =>{
        e.preventDefault(); // Prevent form submission from reloading the page
        setLoading(true);
        const userData = {username, email, password};

        try {
           const response =await  axios.post('http://127.0.0.1:8000/api/v1/register/', userData);
           console.log('response==>', response.data); //ya line abi tak response nhy ay hota or pala hi print ho jati ha. ic lia hum await ka or async ka use karta han
           console.log('User registered successfully!');
           setError({}); // Clear any previous errors upon successful registration
           setSuccess(true); // Set success message
        } catch (error) {
           setError(error.response.data); // Set error message from server response
           console.error('There was an error registering the user!', error.response.data);
        }
        finally{  //finally block chahe try ma success ho ya catch ma error ho, wo hamesha execute hota ha
          setLoading(false);
        }
    };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div className="card p-4 shadow-lg" style={{ width: '350px' }}>
        <h3 className="text-center mb-4 text-info">Create Account</h3>

        <form onSubmit={handleRegistration}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <small>{error.username && <div className='text-danger'>{error.username}</div>}</small>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Enter password"  value={password} onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <small>{error.password && <div className='text-danger'>{error.password}</div>}</small>
          {success && <div className='text-success m-3'>Registration successful</div>}
          {/* Submit Button */}
          {loading ? (<button type="submit" className="btn btn-info w-100">
            Please wait...
          </button>) : (<button type="submit" className="btn btn-info w-100">
            Register
          </button>)}
        </form>
      </div>
    </div>
  )
}

export default Register

