import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Sidebar, Nav, FooterPage } from "../../components";
import { DateTime } from "luxon";
import { useDispatch, useSelector } from 'react-redux'
import { Transfer } from '../../redux/actions/Transfer';

const Content = (props) => {
  const {
    location: { input, reciever },
  } = props;
  const [transferDate, setTransferDate] = React.useState(DateTime.local().toFormat("DD - hh.mm"));
  const {data: dataUser} = useSelector((s) => s.User);




  return (
    <>
      <div className="col-lg-9 pl-3">
        <div className="p-4 bg-white side-nav-right shadow">
          <div className="d-flex align-items-center flex-column my-3">
            <img
              src={window.location.origin + "/assets/images/icons/success-circle.svg"}
              height="50px"
              width="50px"
              alt="success"
            />
            <div className="font-weight-bold mt-3">Transfer Success</div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="font-weight-bold">Detail</div>
          </div>

          <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div className="small">Amount</div>
            <div className="font-weight-bold text-dark">{input.amount}</div>
          </div>

          <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div className="small">Balance Left</div>
            <div className="font-weight-bold text-dark">{dataUser.balance - input.amount}</div>
          </div>

          <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div className="small">Date & Time</div>
            <div className="font-weight-bold text-dark">{transferDate}</div>
          </div>

          <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div className="small">Notes</div>
            <div className="font-weight-bold text-dark">{input.notes}</div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="font-weight-bold">Transfer to</div>
          </div>

          <div className="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 my-4 py-3">
            <div className="d-flex align-items-center">
            <img src={reciever.photo ?'https://db-zwallet.herokuapp.com/' + reciever.photo : 
                "/assets/images/blank.png"} height="56px" width="56px" />
              <div className="pl-3">
                <div className="font-weight-bold text-dark">{reciever.name}</div>
                <div className="small">{`+62 ${reciever.phone}`}</div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4">
          <button
            className="py-2 px-2 rounded-14 btn bg-grey mr-3"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            <img
              src={window.location.origin + "/assets/images/icons/share-2.svg"}
              height="22px"
              width="22px"
              alt="share"
            />
          </button>

          <button
            className="py-2 px-lg-4 px-2 align-items-center rounded-14 btn bg-grey d-flex mr-3"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            <img
              src={window.location.origin + "/assets/images/icons/download.svg"}
              height="22px"
              width="22px"
              alt="download"
            />

            <div className="text-primary ml-2 text-white">Download PDF</div>
          </button>

          <Link
            to="/dashboard"
            className="py-2 px-lg-4 px-2 rounded-14 btn btn-primary">
            Back to Home
          </Link>
        </div>

        </div>
      </div>
    </>
  );
};
const TransferStatus = (props) => {
 
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

export default TransferStatus;
