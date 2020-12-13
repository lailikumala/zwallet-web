import React from "react";
import { Link } from 'react-router-dom';
import "./src/styleSignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthSignUp } from "../../redux/actions/Auth";



const SignUp = (props) => {
  console.log(props, 'a')
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pin, setPin] = React.useState("");
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.Auth);
  if(data.email) console.log('ee', {email: data.email})
  const onSubmit = (e) => {
    e.preventDefault(e);
    dispatch(
      AuthSignUp({
        name: name,
        email: email,
        password: password,
        pin: pin,
      }),
      alert('register successfull')
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

            <h2>Start Accessing Banking Needs
            With All Devices and All Platforms
            With 30.000+ Users</h2>
            <p className="desc">Transfering money is eassier than ever, you can access
            Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>


            <div className="form-group">
              <div className="title-mobile">
                <h4 className="d-sm-none">Login</h4>
                <div className="helper-text d-sm-none">Login to your existing account to access
                all the features in Zwallet.</div>
              </div>
              <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group email col-lg-8">
                  <div className="d-flex">
                    <input type="text" name="username" className="input form-control border-top-0 border-left-0 border-right-0 rounded-0" placeholder="enter username" onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>
                <div className="form-group email col-lg-8">
                  <div className="d-flex">
                    <input type="text" name="email" className="input form-control border-top-0 border-left-0 border-right-0 rounded-0" placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="form-group email col-lg-8">
                  <div className="d-flex">
                    <input type="password" name="password" className="input form-control border-top-0 border-left-0 border-right-0 rounded-0" placeholder="create password" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="form-group password col-lg-8">
                  <div className="d-flex mb-4">
                    <input type="number" name="pin" className="input form-control border-top-0 border-left-0 border-right-0 rounded-0" placeholder="create pin" onChange={(e) => setPin(e.target.value)} />
                  </div>
                </div>
                <div className="form-button col-lg-8">
                  {loading ? (
                      <button type="submit" disabled={true}>Loading....</button>
                    ) : (
                    <button className="d-flex justify-content-center btn-primary" type='submit' className="text-white buttonLogin btn-primary">Sign Up</button>
                  )}
                </div>
              </form>
              <div className="sign-up text-center col-lg-8">
                <p>Do you have an account? <Link to="/login">Login</Link> </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    )

  
};


export default SignUp;
  



