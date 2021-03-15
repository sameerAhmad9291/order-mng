import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { orderActions } from "../_actions";

const Mode = {
  View: "View",
  Edit: "Edit",
};

function Customer(props) {
  const customer = props.customer;
  return (
    <>
      {customer?.name} {customer?.email} {customer?.phone}
    </>
  );
}

function Address(props) {
  const address = props.address;
  return (
    <>
      {address?.street} {address?.city} {address?.zip} {address?.country}
    </>
  );
}

function OrderPage(props) {
  const mode = props.mode ?? Mode.View;
  const readOnly = mode === Mode.View;

  const { selectedOrder } = useSelector((state) => state.orders);
  const [order, setOrder] = useState({
    ...selectedOrder,
  });
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(orderActions.getById(id));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    //  setOrder(order => ({ ...order, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (mode === Mode.View) {
      return;
    }

    //  dispatch(orderActions.update(user));
  }

  const formattedDate = selectedOrder?.bookingDate && new Date(selectedOrder.bookingDate);

  return (
    <div className="col-lg-8">
      <h2>Order Detail</h2>
      {selectedOrder && (
        <form name="form" onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
            <input
              type="text"
              name="title"
              value={selectedOrder.title}
              readOnly={readOnly}
              onChange={handleChange}
              className={
                "form-control" + (!selectedOrder.title ? " is-invalid" : "")
              }
            />
            {!order.title && (
              <div className="invalid-feedback">Title is required</div>
            )}
            </div>
          </div>
          
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Booking Date</label>
            <div className="col-sm-10">
            <input
              type="date" 
              readOnly={readOnly}
              name="bookingDate"
              value={formattedDate}
              onChange={handleChange}
              className={
                "form-control" +
                (!formattedDate ? " is-invalid" : "")
              }
            />
            {!formattedDate && (
              <div className="invalid-feedback">Booking is required</div>
            )}
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <Address
                className="form-control-plaintext"
                address={selectedOrder.address}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="customer" className="col-sm-2 col-form-label">
              Customer
            </label>
            <div className="col-sm-10">
              <Customer
                className="form-control-plaintext"
                customer={selectedOrder.customer}
              />
            </div>
          </div>

          {/* <div className="form-group">
            <button className="btn btn-primary">
              {registering && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Register
            </button>
          </div> */}
        </form>
      )}
    </div>
  );
}

export { OrderPage };
