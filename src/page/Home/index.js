import React from 'react'
import {Sidebar, Nav, FooterPage} from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { GetUser } from '../../redux/actions/Users';
import { History } from '../../redux/actions/History';
import './src/styleHome.css'

const Content = () => {

  const dispatch = useDispatch()
  const { data } = useSelector((s)=> s.User)
  const { data: dataHistory, loading } = useSelector((s)=> s.History)
  const Auth = useSelector((s)=> s.Auth)
  console.log(Auth.data.token, 'll')
  React.useEffect(()=> {
    dispatch(GetUser({
      id: Auth.data.token.id,
      token: Auth.data.token.token
    }));
    dispatch(History({
      id: Auth.data.token.id,
      token: Auth.data.token.token
    }));
    
  }, []);

    return(<>
        <div class="col-lg-9 col-12 pl-3">
        <div class="bg-primary side-nav-right p-4">
          <div class="d-md-flex justify-content-between">
            <div>
              <div class="text-white">Balance</div>
              <h2 class="my-3 text-white font-weight-bold">Rp {data.balance}</h2>
              <div class="small text-white">{data.phone ? `+62 ${data.phone}` : "-"}</div>
            </div>

            <div
              class="d-flex justify-content-between mt-4 mt-md-0 d-md-block"
            >
              <button class="btn py-3 mb-md-2 text-white d-flex">
                <img src="/assets/images/icons/arrow-up-white.svg" height="24px" width="24px"/>
                <div class="font-weight-bold">Transfer</div>
              </button>

              <button
                class="btn py-3 mb-md-2 px-3 text-white d-flex overlay-1"
              >
                <img
                  src="/assets/images/icons/plus-white.svg"
                  height="24px"
                  width="24px"
                />
                <div class="font-weight-bold">Top Up</div>
              </button>
            </div>
          </div>
        </div>

        <div class="mt-3">
          <div class="row no-gutters">
            <div class="col-lg-7 col-12 pr-lg-3">
              <div class="p-4 bg-white shadow-sm side-nav-right">
                <div class="row">
                  <div class="col-6">
                    <img
                      src="/assets/images/icons/arrow-up-green.svg"
                      height="24px"
                      width="24px"
                    />

                    <div class="small my-1">Income</div>

                    <div class="font-weight-bold">Rp2.120.000</div>
                  </div>

                  <div class="col-6">
                    <img
                      src="/assets/images/icons/arrow-up-red.svg"
                      height="24px"
                      width="24px"
                    />

                    <div class="small my-1">Expense</div>

                    <div class="font-weight-bold">Rp1.560.000</div>
                  </div>
                </div>

                <div class="mt-4 d-flex flex-column align-items-center">
                  <div
                    class="bg-white shadow-sm rounded-14 px-4 py-2 text-success font-weight-bold"
                  >
                    +Rp65.000
                  </div>
                  <canvas height="268px" id="canvas" class="w-100"></canvas>
                </div>
              </div>
            </div>

            <div class="col-lg-5 col-12 pt-3 pt-lg-0">
              <div class="p-3 bg-white side-nav-right shadow-sm">
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="font-weight-bold">Transaction History</div>

                  <a href="/dashboard/history" class="small">See all</a>
                </div>

                {loading ? (
                  <div className="d-flex align-items-center mt-2">Loading...</div>
                  ) : (
                  dataHistory.map((item) => {
                    return (
                      <>
                      <div
                        class="d-flex align-items-center justify-content-between py-3 mt-3">
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
          </div>
        </div>
      </div>
    </>)
}
const Home = (props) => {
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
}

export default Home