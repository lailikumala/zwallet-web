import React from "react";
import { Sidebar, Nav, FooterPage } from "../../components";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Components/styleAddPhone.css";
import { useDispatch, useSelector } from 'react-redux';
import { PatchPhone } from '../../redux/actions/ChangePhone';

const Content = (props) => {

  const [phone, setPhone] = React.useState("");
  const { loading } = useSelector((state) => state.ChangePhone);
  const Auth = useSelector((s) => s.Auth)
  const dispatch = useDispatch();
  
  const onSubmit = (e) => {
    e.preventDefault(e);
    dispatch(PatchPhone({
      id: Auth.data.token.id,
      token: Auth.data.token.token,
      phone: phone,
    }),
      setPhone(''),
      alert('add phone successfull')
  )
};
  return (
    <>
      <div class="col-lg-9 pl-3">
        <div class="p-4 bg-white content side-nav-right shadow">
          <div class="d-flex justify-content-between align-items-center">
            <div className="row">
              <div class="font-weight-bold ml-2 mb-4">Add Phone Number</div>
            </div>
          </div>
          <div className="row">
            <div className="description ml-2 mb-4">
              <p>We got you personal infromation from the sign</p>
              <p>up process. If you want to make changes on</p>
              <p>your information, contact our support</p>
              </div>
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
                <div className="d-flex justify-content-center mb-4">
                  <p className="code"><strong>+62</strong></p>
                  <input type="number" name="number" className="input" placeholder="enter your phone number"  onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="form-button d-flex justify-content-center mb-5 mt-5">
                  {loading ? (
                      <button type="submit" disabled={true}>Loading....</button>
                    ) : (
                    <button className="form-button col-lg-7 btn-primary rounded-pill" type='submit' className="text-white buttonLogin btn-primary p-2 pl-5 pr-5 rounded-lg" width={70}>Add Phone</button>
                  )}
                </div>
            </form>
        </div>
      </div>
    </>
  )
};
const AddPhone = (props) => {
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

export default AddPhone;
