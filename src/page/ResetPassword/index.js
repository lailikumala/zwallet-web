import React from "react";
import { Link } from 'react-router-dom';
import "./src/styleSignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { ResetPass } from "../../redux/actions/ResetPassword";



const ResetPassword = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const { loading } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  
  const onSubmit = (e) => {
    e.preventDefault(e);
    dispatch(
      ResetPass({
        email: email,
        password: newPassword,
      }),
      alert('reset  successfull')
    );
  };

  return (
    <div>
    <div className="row">
      <div className="col-md-6 information p-2 p-sm-5 d-none d-sm-block">
        <div className="container">
          <div className="logo">
            <h1 className="ml-4">Zwallet</h1>
          </div>
          <div className="image">
            <img alt="" src='/assets/bg/double-smartphone.svg' className="img-fluid" />
          </div>
          <div className="description ml-4">
            <h2>App that Covering Banking Needs.</h2>
            <p>Zwallet is an application that focussing in banking needs for all users
            in the world. Always updated and always following world trends.
            5000+ users registered in Zwallet everyday with  worldwide<br />
            users coverage.</p>

          </div>
        </div>
      </div>
      <div className="col-md-6 login-col">
        <div className="login-container">
          <div className="login">
            <h3 className="title-mobile d-sm-none">ZWALLET</h3>

            <h2>Did You Forgot Your Password ? 
            Don't Worry You Can Reset Your
            Password In a Minutes</h2>
            <p className="desc">Now you can create a new password for your Zwallet
            account. Type your password twice so we can confirm your
            new password.</p>

            <div className="form-group">
              <div className="title-mobile">
                <h4 className="d-sm-none">Login</h4>
                <div className="helper-text d-sm-none">Login to your existing account to access
                all the features in Zwallet.</div>
              </div>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group email col-lg-8">
                  <div className="d-flex">
                    <input type="text" name="email" className="input form-control border-top-0 border-left-0 border-right-0 rounded-0" placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="form-group email col-lg-8">
                  <div className="d-flex">
                    <input type="password" name="password" className="input form-control border-top-0 border-left-0 border-right-0 rounded-0" placeholder="create new password" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="form-group password col-lg-8">
                  <div className="d-flex mb-4">
                    <input type="password" name="password" className="input form-control border-top-0 border-left-0 border-right-0 rounded-0" placeholder="repeate new password" onChange={(e) => setNewPassword(e.target.value)} />
                  </div>
                </div>
                <div className="form-button col-lg-8">
                  {loading ? (
                      <button type="submit" disabled={true}>Loading....</button>
                    ) : (
                    <button className="d-flex justify-content-center btn-primary" type='submit' className="text-white buttonLogin btn-primary">Reset Password</button>
                  )}
                </div>
              </form>
              <div className="sign-up text-center col-lg-8">
                <p>Back to <Link to="/login">Login</Link> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    )

  
};


export default ResetPassword;
  



