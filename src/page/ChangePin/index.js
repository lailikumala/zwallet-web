import React from "react";
import { Sidebar, Nav, FooterPage } from "../../components";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PatchPin } from '../../redux/actions/ChangePin'
import "./Components/styleChangePin.css";

const Content = (props) => {
  const [pin1, setPin1] = React.useState("");
  const [pin2, setPin2] = React.useState("");
  const [pin3, setPin3] = React.useState("");
  const [pin4, setPin4] = React.useState("");
  const [pin5, setPin5] = React.useState("");
  const [pin6, setPin6] = React.useState("");
  const { loading } = useSelector((state) => state.ChangePin);
  const Auth = useSelector((s) => s.Auth)
  const dispatch = useDispatch();
  const pin = pin1 + pin2 + pin3 + pin4 + pin5 + pin6
  
  const onSubmit = (e) => {
    e.preventDefault(e);
    if(pin.length == 6) {
      dispatch(PatchPin({
        id: Auth.data.token.id,
        token: Auth.data.token.token,
        pin: pin,
      }),
        setPin1(''),
        setPin2(''),
        setPin3(''),
        setPin4(''),
        setPin5(''),
        setPin6(''),
        );
        alert('change pin successfull')
    } else {
      alert('PIN must be 6 digits')
  };
  };
  return (
    <>
      <div class="col-lg-9 pl-3">
        <div class="p-4 bg-white side-nav-right shadow">
          <div class="d-flex justify-content-between align-items-center">
            <div className="row">
              <div class="font-weight-bold ml-2 mb-4">Change Pin</div>
            </div>
          </div>
          <div className="row">
            <div className="description-personal ml-2">
              <p>Type your new 6 digits security PIN to use in</p>
              <p>Zwallet</p>
              </div>
          </div>
            <form onSubmit={(e) => onSubmit(e)}>
           
              
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-center" style={{marginTop: '100px', marginBottom: '90px'}}>
              <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin1(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>
                
                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin2(e.target.value)}  className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin3(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin4(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin5(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>

                <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                  <input onChange={(e) => setPin6(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
                </div>
              </div>
            </div>
            <div className="form-button d-flex justify-content-center mb-5 mt-5">
              {loading ? (
                  <button type="submit" disabled={true}>Loading....</button>
                ) : (
                <button className="form-button col-lg-7 btn-primary rounded-pill" type='submit' className="text-white buttonLogin btn-primary p-2 pl-5 pr-5 rounded-lg">Change Pin</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
};
const ChangePin = (props) => {
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

export default ChangePin;
