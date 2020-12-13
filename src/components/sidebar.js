import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthLogout } from "../redux/actions/Auth";
import { useDispatch } from "react-redux"

import './src/styleComponent.css'


const SidebarMobile = () => {
  return (
    <>
      <div class="side-navbar d-lg-none p-4" id="sidebar">
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="font-weight-bold text-primary pb-0 mb-0">ZWallet</h4>

          <button type="button" class="btn p-0" id="dismiss">
            <img src="/assets/images/icons/x.svg" height="28px" width="28px" />
          </button>
        </div>

        <div class="mt-4">
          <img
            alt="profile"
            src="/assets/images/profile-image.png"
            width="70px"
            height="70px"
          />

          <div class="d-flex align-items-center justify-content-between">
            <div class="mt-2">
              <div class="font-weight-bold text-dark">Robert Chandler</div>
              <span class="small text-black-50">+62 8139 3877 7946</span>
            </div>

            <button class="btn" id="btn-notification">
              <img
                alt="notification"
                src="/assets/images/icons/bell.svg"
                height="24px"
                width="24px"
              />
            </button>
          </div>

          <hr class="my-3" />

          <ul class="p-0">
            <li class="d-flex align-items-center active">
              <img
                alt="dashboard"
                src="/assets/images/icons/grid.svg"
                height="24px"
                width="24px"
              />
              <a href="/dashboard.html" class="text-primary">
                <h6 class="ml-2 mb-0">Dashboard</h6>
              </a>
            </li>
            <li class="d-flex align-items-center my-4">
              <img
                alt="transfer"
                src="/assets/images/icons/arrow-up.svg"
                height="24px"
                width="24px"
              />
              <a href="/search-receiver.html" class="text-dark">
                <h6 class="ml-2 mb-0">Transfer</h6>
              </a>
            </li>
            <li class="d-flex align-items-center my-4">
              <img
                alt="plus"
                src="/assets/images/icons/plus.svg"
                height="24px"
                width="24px"
              />
              <a href="/topup.html" class="text-dark">
                <h6 class="ml-2 mb-0">Top Up</h6>
              </a>
            </li>
            <li class="d-flex align-items-center my-4">
              <img
                alt="profile"
                src="/assets/images/icons/user.svg"
                height="24px"
                width="24px"
              />
              <a href="#" class="text-dark">
                <h6 class="ml-2 mb-0">Profile</h6>
              </a>
            </li>
            <li class="d-flex align-items-center my-4">
              <img
                alt="logout"
                src="/assets/images/icons/log-out.svg"
                height="24px"
                width="24px"
              />
              <a href="/login.html" class="text-dark">
                <h6 class="ml-2 mb-0">Logout</h6>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-overlay d-lg-none" id="sidebar-overlay"></div>
    </>
  );
};

const SideBarDesktop = (props) => {
  console.log(props, "allprops sidebar dom");
  return (
    <div class="col-3 d-lg-flex d-none side-nav-left bg-white flex-column justify-content-between shadow py-4">
      <ul>
        {props.location.pathname == "/" ? (
          <li class="d-flex align-items-center my-4">
            <img
              alt="dashboard"
              src="/assets/images/icons/grid.svg"
              height="24px"
              width="24px"
            />
            <Link to="/">
              <h6 class="ml-2 mb-0 text-primary ">Dashboard</h6>
            </Link>
          </li>
        ) : (
          <li class="d-flex align-items-center my-4">
            <img
              alt="dashboard"
              src="/assets/images/icons/grid-dark.svg"
              height="24px"
              width="24px"
            />
            <Link to="/dashboard">
              <h6 class="ml-2 mb-0 text-dark">Dashboard</h6>
            </Link>
          </li>
        )}
        {props.location.pathname == "/transfer" ||
        props.location.pathname == "/transfer/amount" ||
        props.location.pathname == "/transfer/confirmation" ? (
          <li class="d-flex align-items-center my-4">
            <img
              alt="dashboard"
              src="/assets/images/icons/arrow-up-active.svg"
              height="24px"
              width="24px"
            />
            <Link to="/transfer">
              <h6 class="ml-2 mb-0">Transfer</h6>
            </Link>
          </li>
        ) : (
          <li class="d-flex align-items-center my-4">
            <img
              alt="dashboard"
              src="/assets/images/icons/arrow-up.svg"
              height="24px"
              width="24px"
            />
            <Link to="/transfer">
              <h6 class="ml-2 mb-0 text-dark">Transfer</h6>
            </Link>
          </li>
        )}
        <li class="d-flex align-items-center my-4">
          <img
            alt="plus"
            src="/assets/images/icons/plus.svg"
            height="24px"
            width="24px"
          />
          <a href="/topup.html" class="text-dark">
          <Link to="/topup">
              <h6 class="ml-2 mb-0 text-dark">topup</h6>
            </Link>
          </a>
        </li>
        <li class="d-flex align-items-center my-4">
          <img
            alt="profile"
            src="/assets/images/icons/user.svg"
            height="24px"
            width="24px"
          />
            <Link to="/profile">
              <h6 class="ml-2 mb-0 text-dark">Profile</h6>
            </Link>
          
        </li>
      </ul>

      <ul>
        <li class="d-flex align-items-center my-4">
          <img
            alt="logout"
            src="/assets/images/icons/log-out.svg"
            height="24px"
            width="24px"
          />
          <div onClick={()=> props.onLogout()} class="text-dark">
            <h6 class="ml-2 mb-0">Logout</h6>
          </div>
        </li>
      </ul>
    </div>
  );
};

const Sidebar = (props) => {
  let location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch()
  const onLogout = ()=> {
    dispatch(AuthLogout())
    history.replace('/login')
  }
  return (
    <SideBarDesktop location={location} onLogout={onLogout} />
  );
};

export default Sidebar;
