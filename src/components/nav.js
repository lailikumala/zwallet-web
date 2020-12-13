import React from "react";
import { GetUser } from "../redux/actions/Users";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {

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
    <nav className="navbar myNav navbar-dark shadow">
      <div className="container">
        <div className="d-flex justify-content-start">
          <h2 className=" brand mt-3 mb-3 ml-3" id="zwallet-icon-blue">
            Zwallet
          </h2>
        </div>
        <div className="d-flex justify-content-end">
        <img
          className="mb-3 mt-1"
          style={{ borderRadius: "10px" }}
          width="50px"
          height="50px"
          src={data.photo ?'https://db-zwallet.herokuapp.com/' + data.photo : 
              "/assets/images/blank.png"}
        />
          <div className=" d-flex flex-column mr-3">
            <span id="profile-name" className="ml-3 mt-1 text-dark">
              {data.name}
            </span>
            <p id="profile-number" className="ml-3 mb-1 text-dark">
            {data.phone ? `+62 ${data.phone}` : "-"}
            </p>
          </div>
          <img
            src="assets/images/icons/bell.svg"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
