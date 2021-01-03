import React from "react";
import { useHistory } from "react-router-dom";
import { Sidebar, Nav, FooterPage } from "../../components";
import { DateTime } from "luxon";
import { useDispatch, useSelector } from 'react-redux'
import { Transfer } from '../../redux/actions/Transfer';
import { Button, Modal } from "react-bootstrap";

const Content = (props) => {
  const {
    location: { input, reciever },
  } = props;
  const [transferDate, setTransferDate] = React.useState(DateTime.local().toFormat("DD - hh.mm"));

    const [pin1, setpin1] = React.useState("");
    const [pin2, setpin2] = React.useState("");
    const [pin3, setpin3] = React.useState("");
    const [pin4, setpin4] = React.useState("");
    const [pin5, setpin5] = React.useState("");
    const [pin6, setpin6] = React.useState("");
    const pin = pin1 + pin2 + pin3 + pin4 + pin5 + pin6
    console.log(pin, 'input')

    const dispatch = useDispatch();
    const [showVerification, setShowVerification] = React.useState(false);
    const Auth = useSelector((s) => s.Auth);
    const {data} = useSelector((s) => s.Transfer);
    const {data: dataUser} = useSelector((s) => s.User);
    const pinUser = dataUser.pin;
    console.log(pinUser)
    const id_sender = Auth.data.token.id;
    console.log(id_sender)
    const id_reciever = reciever.id;
    console.log(id_reciever)
    const name = reciever.name;
    console.log(reciever)
    const amount = input.amount;
    console.log(amount)
    const notes = input.notes;
    console.log(notes)



  const onSubmit = () => {
    if(pin == pinUser) {
      console.log(pin, pinUser)
      dispatch(Transfer({
        token: Auth.data.token.token,
        id_sender: id_sender,
        id_reciever: id_reciever,
        reciever: name,
        amount: amount,
        notes: notes
      }));
      alert('success')
      props.history.push({
        pathname: "/transfer/status",
        reciever: {...reciever},
        input: {
          amount: amount,
          notes: notes,
        }, 
      })
    } else {
      alert('failed')
    }
 
  };

  return (
    <>
      <div className="col-lg-9 pl-3">
        <div className="p-4 bg-white side-nav-right shadow">
          <div className="d-flex justify-content-between align-items-center">
            <div className="font-weight-bold">Transfer To</div>
          </div>

          <div className="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 my-4 py-3">
            <div className="d-flex align-items-center">
            <img src={reciever.photo ?'https://db-zwallet.herokuapp.com/' + reciever.photo : 
                "/assets/images/blank.png"} height="56px" width="56px" />
              <div className="pl-3">
                <div className="font-weight-bold text-dark">{name}</div>
                <div className="small">{`+62 ${reciever.phone}`}</div>
              </div>
            </div>
          </div>

          <div className="font-weight-bold">Details</div>

          <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div className="small">Amount</div>
            <div className="font-weight-bold text-dark">{amount}</div>
          </div>

          <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div className="small">Balance Left</div>
            <div className="font-weight-bold text-dark">{dataUser.balance - amount}</div>
          </div>

          <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div className="small">Date & Time</div>
            <div className="font-weight-bold text-dark">{transferDate}</div>
          </div>

          <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div className="small">Notes</div>
            <div className="font-weight-bold text-dark">{notes}</div>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button
              onClick={() => setShowVerification(true)}
              className="py-2 px-4 rounded-14 btn btn-primary"
              data-toggle="modal"
              data-target="#staticBackdrop">
              Continue
            </button>
          </div>
        </div>
      </div>
      <Modal
        show={showVerification}
        onHide={() => {
          setShowVerification(false)
        }}>
        <Modal.Header closeButton>
          <Modal.Title>Enter PIN to Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Enter your 6 digits PIN for confirmation to continue transferring
          money.
          <form action="success-transfer.html">
            <div className="d-flex justify-content-center" style={{marginTop: '100px', marginBottom: '90px'}}>
              <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                <input onChange={(e) => setpin1(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
              </div>
              <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                <input onChange={(e) => setpin2(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
              </div>
              <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                <input onChange={(e) => setpin3(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
              </div>
              <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                <input onChange={(e) => setpin4(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
              </div>
              <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                <input onChange={(e) => setpin5(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
              </div>
              <div className="d-flex flex-column" style={{marginLeft: '20px'}}>
                <input onChange={(e) => setpin6(e.target.value)} className="input-bordered-small font-weight-bold rounded-14" type='text' placeholder='_'  maxLength="1" style={{borderRadius: '10px', width: '50px'}} />
              </div>
            </div>  
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => onSubmit()}>
            Save Change
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
const TransferConfirmation = (props) => {
  const history = useHistory();
  (!props.location.reciever || !props.location.input) &&
    history.replace("/transfer");

  return (
    <>
    <Nav/>
    <div className="bg-secondary">
      <section class="my-5 container">
        <div class="row">
          <Sidebar />
          {props.location.reciever || props.location.input ? (
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
