import React from "react";
import { Sidebar, Nav, FooterPage } from "../../components";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PatchProfile } from '../../redux/actions/PatchUser'
import "./Components/styleChangePassword.css";

const Content = (props) => {
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const { loading } = useSelector((state) => state.PatchUser);
  const Auth = useSelector((s) => s.Auth)
  const dispatch = useDispatch();
  
  const onSubmit = (e) => {
    e.preventDefault(e);
    if(currentPassword && newPassword && newPassword === repeatPassword) {
      dispatch(PatchProfile({
            id: Auth.data.token.id,
            token: Auth.data.token.token,
            password: repeatPassword,
          }),
      setCurrentPassword(''),
      setNewPassword(''),
      setRepeatPassword('')
        );
    } else {
      alert('new password & reapet password no match')
  };
};
  return (
    <>
      <div class="col-lg-9 pl-3">
        <div class="p-4 bg-white side-nav-right shadow">
          <div class="d-flex justify-content-between align-items-center">
            <div className="row">
              <div class="font-weight-bold ml-2 mb-5">Change Password</div>
            </div>
          </div>
          <div className="row">
            <div className="description-personal ml-2">
              <p>You must enter your current password and then</p>
              <p>type new password twice</p>
              </div>
          </div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="d-flex justify-content-center mb-4">
                  <input type="password" name="currentPassword" className="input mt-4  border-top-0 border-left-0 border-right-0 rounded-0" placeholder="enter current password"  onChange={(e) => setCurrentPassword(e.target.value)}/>
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <input type="password" name="newPassword" className="input  border-top-0 border-left-0 border-right-0 rounded-0" placeholder="create new password"  onChange={(e) => setNewPassword(e.target.value)}/>
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <input type="password" name="repeatPassword" className="input  border-top-0 border-left-0 border-right-0 rounded-0" placeholder="repeat new password"  onChange={(e) => setRepeatPassword(e.target.value)}/>
                </div>
                <div className="form-button d-flex justify-content-center mb-5 mt-5">
                  {loading ? (
                      <button type="submit" disabled={true}>Loading....</button>
                    ) : (
                    <button className="form-button col-lg-7 btn-primary rounded-pill" type='submit' className="text-white buttonLogin btn-primary p-2 pl-5 pr-5 rounded-lg" width={70}>Change Password</button>
                  )}
                </div>
            </form>
        </div>
      </div>
    </>
  )
};
const ChangePassword = (props) => {
  return (
    <>
      <Nav/>
      <div className="bg-secondary">
        <section class="my-5 container">
          <div class="row">
            <Sidebar />
            <Content {...props} />
          </div>
        </section>
      </div>
      <FooterPage/>
    </>
  );
};

export default ChangePassword;
