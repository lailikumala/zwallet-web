import React from "react";
import { Sidebar, Nav, FooterPage } from "../../components";
import { DataTansfer } from "../../redux/actions/Transfer"
import { useDispatch, useSelector } from "react-redux";
import "./Components/styleTransferSearch.css"

const Content = (props) => {
  const [name, setName] = React.useState("")
  const [query, setQuery] = React.useState("");
  const dispatch = useDispatch()
  const {data} = useSelector((s)=> s.Transfer)
  const Auth = useSelector((s)=> s.Auth)
  

  React.useEffect(() => {
    dispatch(DataTansfer({
      name: query,
      token: Auth.data.token.token
    }))
  }, [query]);
  return (
    <>
      <div class="col-lg-9 pl-3">
        <div class="p-4 bg-white  side-nav-right shadow">
          <div class="d-flex justify-content-between align-items-center">
            <div class="font-weight-bold">Search Receiver</div>
          </div>

          <div class="input-container-bordered my-2">
            <label class="d-flex w-100 align-items-center">
              <span class="i-search"></span>
              <input
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search receiver here"
                type="text"
                class="input-line"
              />
            </label>
          </div>
          
            {data.map((item, index) => {
              return (
                <div class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
                    <div class="d-flex align-items-center">
                   <img
                      className="mb-3 mt-1"
                      style={{ borderRadius: "10px" }}
                      width="75px"
                      height="75px"
                      src={item.photo ?'https://db-zwallet.herokuapp.com/' + item.photo : 
                          "/assets/images/blank.png"}
                    />
                    <div class="pl-3">
                      <div class="font-weight-bold text-dark">{item.name}</div>
                      <div class=" text-dark">{item.phone ? `+62 ${item.phone}` : "-"}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          
        </div>
      </div>
    </>
  );
};
const TransferSearch = (props) => {
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

export default TransferSearch;
