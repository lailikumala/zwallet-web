import React from "react";
import { Sidebar, Nav, FooterPage } from "../../components";
import { History } from '../../redux/actions/History';
import { useDispatch, useSelector } from "react-redux";


const Content = () => {
  const dispatch = useDispatch()
  const { data: dataHistory, loading } = useSelector((s)=> s.History)
  const Auth = useSelector((s) => s.Auth)
  

  React.useEffect(() => {
    dispatch(History({
      id: Auth.data.token.id,
      token: Auth.data.token.token
    }));
    
  }, []);
  return (
    <>
      <div class="col-lg-9 pl-3">
        <div class="p-4 bg-white side-nav-right shadow">
          <div class="d-flex justify-content-between align-items-center">
            <div class="font-weight-bold">Transaction History</div>
          </div>

          {loading ? (
            <div className="d-flex align-items-center mt-2">Loading...</div>
            ) : (
            dataHistory.map((item) => {
              return (
                <>
                <div
                  class="d-flex align-items-center justify-content-between py-3 mt-4">
                  <div class="d-flex align-items-center">
                    <img
                      src="/assets/images/blank.png"
                      height="56px"
                      width="56px"
                    />
                    <div class="pl-3">
                      <div class="font-weight-bold">{item.reciever}</div>
                      <div class="small">Transfer</div>
                    </div>
                  </div>

                  <div class="text-danger font-weight-bold">- Rp{item.amount}</div>
                </div>
                </>
              );
            })
          )}
          
        </div>
      </div>
    </>
  );
};
const HistoryTransfer = (props) => {
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

export default HistoryTransfer;
