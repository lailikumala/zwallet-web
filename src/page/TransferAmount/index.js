import Axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { Sidebar, Nav, FooterPage } from "../../components";

const Content = (props) => {
  const {
    location: { receiver },
  } = props;

  const [amount, setAmount] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [balance, setBalance] = React.useState(2000000);
  const [profileData, setProfileData] = React.useState("");

  React.useEffect(() => {
    Axios.get("https://heroku-zwallet.herokuapp.com/profile/1")
      .then((res) => setProfileData(res.data.data[0]))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <div class="col-lg-9 pl-3">
        <div class="p-4 bg-white side-nav-right shadow">
          <div class="d-flex justify-content-between align-items-center">
            <div class="font-weight-bold">Transfer Money</div>
          </div>

          <div class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-4 py-3">
            <div class="d-flex align-items-center">
              <img src="/assets/images/1.png" height="56px" width="56px" />
              <div class="pl-3">
                <a href="#" class="font-weight-bold text-dark">
                  {receiver.receiver}
                </a>
                <div class="small">{receiver.reciever}</div>
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

          <form
            action="/transfer-confirmation.html"
            class="mt-5 d-flex flex-column align-items-center"
          >
            <input
              class="d-block font-weight-bold input-only-placeholder"
              placeholder="0.00"
              type="text"
              maxlength="19"
              id="currency"
              onChange={(e) => setAmount(e.target.value)}
            />

            <div class="font-weight-bold mt-3 mb-5">
              {balance - amount} Available
            </div>

            <div class="input-container w-50">
              <label for="notes" class="d-flex w-100">
                <span class="i-edit"></span>
                <input
                  id="notes"
                  placeholder="Add some notes"
                  type="text"
                  class="input-line"
                  onChange={(e) => setNotes(e.target.value)}
                />
              </label>
            </div>

            <div class="w-100 d-flex justify-content-end mt-5">
              <button
                type="submit"
                class="btn btn-primary py-2 px-4 rounded-14"
                onClick={() =>
                  props.history.push({
                    pathname: "/transfer/confirmation",
                    receiver: {...receiver},
                    input: {
                      amount: amount,
                      notes: notes,
                      balance: (balance-amount),
                      profileData: profileData,
                    }
                  })
                }
              >
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
  !props.location.receiver && history.replace("/transfer");
  // React.useEffect(()=> {
  // },[])
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
