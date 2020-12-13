import React from "react";
import { Sidebar, Nav, FooterPage } from "../../components";
import Axios from "axios";
import { Link } from "react-router-dom";
import { GetUser } from "../../redux/actions/Users";
import { useDispatch, useSelector } from "react-redux";
import "./Components/styleManagePhone.css";

const Content = (props) => {

  const dispatch = useDispatch()
  const Auth = useSelector((s)=> s.Auth)
  const { data } = useSelector((s)=> s.User)
  
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
      <div className="col-lg-9 pl-3">
        <div className="p-4 bg-white content side-nav-right shadow">
        <div className="d-flex justify-content-between align-items-center">
            <div className="row">
              <div className="font-weight-bold ml-2 mb-4">Manage Phone</div>
            </div>
          </div>
          <div className="row">
            <div className="description-personal ml-2">
              <p>You can only delete the phone number and then</p>
              <p>you must add another phone number</p>
              </div>
          </div>
          <div className="shadow-sm primary rounded-14 pl-3 my-4 py-3 mb-5">
            <div>Primary</div>
            <div className="font-weight-bold text-dark d-flex justify-content-start mt-2">{data.phone ? `+62 ${data.phone}` : "-"}</div>
            <div className="d-flex justify-content-end"><Link className="mr-3 text-primary" to="/profile/add_phone"><img className="mt-1 mr-1" src="/assets/images/vector.png" width="20px" height="23px" /></Link></div>
          </div>
        </div>
      </div>
    </>
  )
};
const ManagePhone = (props) => {
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

export default ManagePhone;
