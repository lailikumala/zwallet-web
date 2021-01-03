import Axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { Sidebar, Nav, FooterPage } from "../../components";
import { useDispatch, useSelector } from 'react-redux'

const Content = (props) => {
  const {
    location: { reciever },
  } = props;

  const [amount, setAmount] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const {data: dataUser} = useSelector((s) => s.User);
  const [profileData, setProfileData] = React.useState("");

  
  return (
    <>
      <div class="col-lg-9 pl-3">
        <div class="p-4 bg-white side-nav-right shadow">
          <div class="d-flex justify-content-between align-items-center">
            <div class="font-weight-bold">Transfer Money</div>
          </div>

          <div class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-4 py-3">
            <div class="d-flex align-items-center">
              <img src={reciever.photo ?'https://db-zwallet.herokuapp.com/' + reciever.photo : 
                "/assets/images/blank.png"} height="56px" width="56px" />
              <div class="pl-3">
                <a href="#" class="font-weight-bold text-dark">
                  {reciever.name}
                </a>
                <div class="small">{`+62 ${reciever.phone}`}</div>
              </div>
            </div>
          </div>

          <div class="w-50 d-none d-lg-block mt-4">
            Type the amount you want to transfer and then press continue to the
            next steps.
          </div>

          <div class="d-lg-none mt-4">
            Type the amount you want to transfer and then press continue to the
            next steps.
          </div>

          <form class="mt-3 d-flex flex-column align-items-center">
            <input
              className="d-block font-weight-bold input-only-placeholder"
              placeholder="0.00"
              type="number"
              maxlength="19"
              id="currency"
              onChange={(e) => setAmount(e.target.value)}
            />

            <div class="font-weight-bold mt-3 mb-3">
             {dataUser.balance - amount}  Available
            </div>

            <div className=" text-center nunito-grey pt-3 my-2 mx-5 ">
              <label htmlFor="notes" className="nunito-transparent">
                <input
                  onChange={(e) => setNotes(e.target.value)}
                  type="text"
                  name="notes"
                  id="notes"
                  className="form-control form-control border-top-0 border-left-0 border-right-0 rounded-0 w-100"
                  placeholder="Add some notes"
                />
              </label>
            </div>

            <div class="w-100 d-flex justify-content-end mt-5 mb-5">
              <button
                type="submit"
                class="btn btn-primary py-2 px-4 rounded-14"
                onClick={() =>
                  props.history.push({
                    pathname: "/transfer/confirmation",
                    reciever: {...reciever},
                    input: {
                      amount: amount,
                      notes: notes,
                    }, 
                  })
                }>
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
const TransferAmount = (props) => {
  console.log(props, "amount");
  const history = useHistory();
  console.log(history);
  React.useEffect(()=> {
  },[])
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

export default TransferAmount;
