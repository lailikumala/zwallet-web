import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import { Sidebar, Nav, FooterPage } from "../../components";
import { DateTime } from "luxon";
import Axios from "axios";
import { Button, Modal } from "react-bootstrap";
const Content = (props) => {
  const {
    location: { input, receiver },
  } = props;
  const [transferDate, setTransferDate] = React.useState(
    DateTime.local().toFormat("DD - hh.mm")
  );
  const [profileData, setProfileData] = React.useState("");
  const [showVerification, setShowVerification] = React.useState(false);
  const [pin, setPin] = React.useState("");
  const inputFocus = React.useRef(null);
  React.useEffect(() => {
    Axios.get("https://heroku-zwallet.herokuapp.com/profile/1")
      .then((res) => setProfileData(res.data.data[0]))
      .catch((err) => console.log(err));
  }, []);


  const handleSubmit = () => {
    // alert("aha");
    Axios({
      method: "post",
      url: `https://heroku-zwallet.herokuapp.com/transaction/${receiver.id}`,
      data: {
        amount: input.amount,
        note: input.notes,
        id_sender: profileData.id || 0,
    
      },
    })
      .then((res) => {
        setShowVerification(false)
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div class="col-lg-9 pl-3">
        <div class="p-4 bg-white side-nav-right shadow">
          <div class="d-flex justify-content-between align-items-center">
            <div class="font-weight-bold">Transfer To</div>
          </div>

          <div class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 my-4 py-3">
            <div class="d-flex align-items-center">
              <img src="/assets/images/1.png" height="56px" width="56px" />
              <div class="pl-3">
                <div class="font-weight-bold text-dark">{receiver.reciever}</div>
              </div>
            </div>
          </div>

          <div class="font-weight-bold">Details</div>

          <div class="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div class="small">Amount</div>
            <div class="font-weight-bold text-dark">{input.amount}</div>
          </div>

          <div class="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div class="small">Balance Left</div>
            <div class="font-weight-bold text-dark">{input.balance}</div>
          </div>

          <div class="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div class="small">Date & Time</div>
            <div class="font-weight-bold text-dark">{transferDate}</div>
          </div>

          <div class="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div class="small">Notes</div>
            <div class="font-weight-bold text-dark">{input.notes}</div>
          </div>

          <div class="d-flex justify-content-end mt-4">
            <button
              onClick={() => setShowVerification(true)}
              class="py-2 px-4 rounded-14 btn btn-primary"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <Modal
        show={showVerification}
        onHide={() => {
          setShowVerification(false)
        }}
        onExited={()=> {
          alert('Transfer successfully!')
        }}
        onEntered={() => inputFocus.current.focus()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter PIN to Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Enter your 6 digits PIN for confirmation to continue transferring
          money.
          <form action="success-transfer.html">
            <div class="my-5 row no-gutters container-input">
              <div class="col-2 input-class px-2 px-lg-0">
                <input
                  value={pin}
                  ref={inputFocus}
                  maxLength={6}
                  onChange={(e) => setPin(e.target.value)}
                  style={{ opacity: 0, position: 'absolute' }}
                />
                <input
                  class="input-bordered-small font-weight-bold rounded-14"
                  type="text"
                  // oninput="onChangeInput(this)"
                  maxlength="1"
                  readOnly
                  value={pin.charAt(0)}
                  onFocus={() => inputFocus.current.focus()}
                  // onChange={(e) => setpin1(e.target.value)}
                  // ref={input1}
                />
              </div>

              <div class="col-2 input-class px-2 px-lg-0">
                <input
                  class="input-bordered-small font-weight-bold rounded-14"
                  // oninput="onChangeInput(this)"
                  type="text"
                  maxlength="1"
                  readOnly
                  value={pin.charAt(1)}
                  onFocus={() => inputFocus.current.focus()}
                  // onChange={(e) => setpin2(e.target.value)}
                  // ref={input2}
                />
              </div>

              <div class="col-2 input-class px-2 px-lg-0">
                <input
                  class="input-bordered-small font-weight-bold rounded-14"
                  type="text"
                  // oninput="onChangeInput(this)"
                  maxlength="1"
                  readOnly
                  value={pin.charAt(2)}
                  onFocus={() => inputFocus.current.focus()}
                  // onChange={(e) => setpin3(e.target.value)}
                  // ref={input3}
                />
              </div>

              <div class="col-2 input-class px-2 px-lg-0">
                <input
                  class="input-bordered-small font-weight-bold rounded-14"
                  type="text"
                  // oninput="onChangeInput(this)"
                  maxlength="1"
                  readOnly
                  value={pin.charAt(3)}
                  onFocus={() => inputFocus.current.focus()}
                  // onChange={(e) => setpin4(e.target.value)}
                  // ref={input4}
                />
              </div>

              <div class="col-2 input-class px-2 px-lg-0">
                <input
                  class="input-bordered-small font-weight-bold rounded-14"
                  type="text"
                  // oninput="onChangeInput(this)"
                  maxlength="1"
                  readOnly
                  value={pin.charAt(4)}
                  onFocus={() => inputFocus.current.focus()}
                  // onChange={(e) => setpin5(e.target.value)}
                  // ref={input5}
                />
              </div>

              <div class="col-2 input-class px-2 px-lg-0">
                <input
                  class="input-bordered-small font-weight-bold rounded-14"
                  type="text"
                  // oninput="onChangeInput(this)"
                  maxlength="1"
                  readOnly
                  value={pin.charAt(5)}
                  onFocus={() => inputFocus.current.focus()}
                  // onChange={(e) => setpin6(e.target.value)}
                  // ref={input6}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save Change
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
const TransferConfirmation = (props) => {
  console.log(props, "propsnyaaaaaaaaaaaaaaa");
  const history = useHistory();
  // console.log(history);
  (!props.location.receiver || !props.location.input) &&
    history.replace("/transfer");
  // React.useEffect(()=> {
  // },[])
  return (
    <>
    <Nav/>
    <div className="bg-secondary">
      <section class="my-5 container">
        <div class="row">
          <Sidebar />
          {props.location.receiver || props.location.input ? (
            <Content {...props} />
          ) : (
            <div>no</div>
          )}
        </div>
      </section>
    </div>
    <FooterPage/>
    </>
  );
};

export default TransferConfirmation;
