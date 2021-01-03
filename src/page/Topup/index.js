import React from "react";
import { Sidebar, Nav, FooterPage } from "../../components";
import { TopupData } from "../../redux/actions/Topup";
import { useDispatch, useSelector } from "react-redux";
import "./Components/styleTopup.css"

const Content = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((s) => s.Topup)
  const Auth = useSelector((s) => s.Auth)
  console.log(Auth.data.token, 'll')

  React.useEffect(() => {
    dispatch(TopupData({
      token: Auth.data.token.token
    }))
    console.log(data, 'nn')
  }, []);
  return (
    <>
      <div class="col-lg-9 pl-3">
        <div class="p-4 bg-white side-nav-right shadow">
          <div class="d-flex justify-content-between align-items-center">
            <div class="font-weight-bold">How to Top Up</div>
          </div>
            {data.map((item, index) => {
              return (
                <>
                <div class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
                  <div class="d-flex align-items-center">
                  <span className="num-topup text-primary bold"> {index + 1}</span>
                  <p className="text-dark description ml-3 mt-3">{item.detail}</p>
                  </div>
                </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
const Topup = (props) => {
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

export default Topup;
