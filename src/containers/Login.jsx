import { useState, useCallback } from 'react';
import { LoginService } from '../services/UserService';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [data, setData] = useState({
        email: "",
        password: ""
      }
    )

    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
      }
    );

    const handleLogin = () => {
        
        
        // AuthService.login(username, password).then(
        //   () => {
        //     this.props.history.push("/profile");
        //     window.location.reload();
        //   },
        //   error => {
        //     const resMessage =
        //       (error.response &&
        //         error.response.data &&
        //         error.response.data.message) ||
        //       error.message ||
        //       error.toString();
        //     this.setState({
        //       loading: false,
        //       message: resMessage
        //     });
        //   }
        // );
      }

    return (
        <div className="col-md-12">
          <div className="card card-container">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
            />
              {/* <form> */}
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input name="email" type="text" onChange={handleOnChange} className="form-control" />
                  {/* <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  /> */}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input name="password" type="password" onChange={handleOnChange} className="form-control" />
                  {/* <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  /> */}
                </div>
                <div className="form-group d-flex justify-content-center my-3">
                  <button type="submit" onClick={handleLogin} className="btn btn-primary btn-block">
                    {/* {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )} */}
                    <span>Login</span>
                  </button>
                </div>
                {/* {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )} */}
              {/* </form> */}
          </div>
        </div>
      );
}

export default Login