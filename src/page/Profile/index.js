import React from "react";
import { Sidebar, Nav, FooterPage } from "../../components";
import "./Components/styleProfile.css"
import { Link } from "react-router-dom";
import { AuthLogout } from '../../redux/actions/Auth';
import {GetUser, PatchPhoto} from '../../redux/actions/Users';
import { useDispatch, useSelector } from "react-redux";
import Axios from 'axios'
const Content = () => {
 
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


  const uploadImage = (e) => {
    
      
        const formData = new FormData();
        formData.append('photo', e.target.files[0]);

        const header = {
          headers: {
            'auth-token': `${Auth.data.token.token}`,
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
          },
        };
        Axios.patch(
          `https://db-zwallet.herokuapp.com/api/change_photo/${Auth.data.token.id}`,
          formData,
          header,
        )
          .then((response) => {
            console.log('upload succes', response);
          })
          .catch((error) => {
            console.log('upload error', error);
          });
      
  
  };

  return (
    <>
      <div className="col col-sm-12 col-md-6 w-100 bg-white chart shadow">
        <div className="sub-profile">
          <div className="row d-flex justify-content-center mt-2">
          <img
            className="mb-2 mt-5"
            style={{ borderRadius: "10px" }}
            width="75px"
            height="75px"
            src={data.photo ?'https://db-zwallet.herokuapp.com/' + data.photo : 
                "/assets/images/blank.png"}
          />
          </div>

          <div className="text-center">
            <label
              className="text-black-50 small"
              style={{ cursor: "pointer" }}
            >
              <div>
              <p className="row profile-edit  d-flex justify-content-center"><img className=" mr-1" src="/assets/images/pen.png" width="13px" height="13px" /> Edit</p>
              </div>
              <input
                type="file"
                className="d-none"
                onChange={uploadImage}
                accept="image/*"
              />
            </label>
          </div>
          <h6 className="row profile-name text-dark d-flex justify-content-center">{data.name}</h6>
          <p className="row profile-phone text-dark d-flex justify-content-center">{data.phone ? `+62 ${data.phone}` : "-"}</p>
        </div>

        

         <Link className="row d-flex justify-content-center mt-3 mb-3" to="/profile/personal_information">
          <div className="d-flex justify-content-around button-profile">
            <div className="text-dark">Personal Information</div>
            <img src="/assets/images/arrow-left.png" className="arrow-left"/>
          </div>
        </Link>

        <Link className="row d-flex justify-content-center mt-3 mb-3" to="/profile/change_password">
          <div className="d-flex justify-content-around button-profile">
            <div className="text-dark">Change Password</div>
            <img src="/assets/images/arrow-left.png" className="arrow-left"/>
          </div>
        </Link>

        <Link className="row d-flex justify-content-center mt-3 mb-3" to="/profile/change_pin">
          <div className="d-flex justify-content-around button-profile">
            <div className="text-dark">Change Pin</div>
            <img src="/assets/images/arrow-left.png" className="arrow-left1"/>
          </div>
        </Link>
        
        <Link className="row d-flex justify-content-center mt-3 mb-4" to="/login">
          <div className="d-flex justify-content-center button-profile">
            <div className="text-dark">Logout</div>
          </div>
        </Link>
      </div>
    </>
  );
};


const Profile = (props) => {
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

export default Profile;
