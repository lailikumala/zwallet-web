import React from "react";
import { Sidebar, Nav, FooterPage } from "../../components";
import { Link } from "react-router-dom";
import { GetUser } from "../../redux/actions/Users";
import { useDispatch, useSelector } from "react-redux";
import "./Components/stylePersonal.css";

const Content = () => {
  
  const dispatch = useDispatch()
  const Auth = useSelector((s)=> s.Auth)
  const { data } = useSelector((s)=> s.User)
  const username = data.name.split(' ');
  const firstName = username[0];
  const lastName = () => {
    if (username.length > 0) return username[1];
  };
  console.log(Auth.data.token, 'll')

  React.useEffect(()=> {
    
      dispatch(GetUser({
        id: Auth.data.token.id,
        token: Auth.data.token.token
      }));
    console.log(data, 'mm')
  }, []);
  return (
    <>
      <div class="col-lg-9 pl-3">
        <div class="p-4 bg-white side-nav-right shadow">
          <div class="d-flex justify-content-between align-items-center">
            <div className="row">
              <div class="font-weight-bold ml-2 mb-5">Personal Infromation</div>
            </div>
          </div>
          <div className="row">
            <div className="description-personal ml-2">
              <p>We got you personal infromation from the sign</p>
              <p>up process. If you want to make changes on</p>
              <p>your information, contact our support</p>
              </div>
          </div>
          <div class="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div class="small">first name</div>
            <div class="font-weight-bold text-dark">{firstName}</div>
          </div>
          <div class="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div class="small">last name</div>
            <div class="font-weight-bold text-dark">{lastName()}</div>
          </div>
          <div class="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div class="small">verified email'</div>
            <div class="font-weight-bold text-dark">{data.email}</div>
          </div>
          <div class="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div class="small">phone number</div>
            <div class="font-weight-bold text-dark d-flex justify-content-start">{data.phone ? `+62 ${data.phone}` : "-"}</div>
            <div className="d-flex justify-content-end"><Link className="mr-3 text-primary" to="/profile/manage_phone">Manage</Link></div>
          </div>
        </div>
      </div>
    </>
  )
};
const PersonalInformation = (props) => {
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

export default PersonalInformation;
