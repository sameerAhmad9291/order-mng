import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../_actions";
import { useIsUpdated } from "../hooks/is-updated";

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

function OrderDetailPage(props) {
  const mode = props.location.state?.mode ?? Mode.View;
  const readOnly = mode === Mode.View;

  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedOrder } = useSelector((state) => state.orders);
  const [orderDetail, setOrderDetail] = useState();

  useEffect(() => {
    dispatch(orderActions.getById(id));
  }, []);

  const formatDate = (d) => {
    const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${year}-${month}-${day}`;
  };

  useIsUpdated(() => {
    selectedOrder &&
      setOrderDetail({
        ...selectedOrder,
        ...(selectedOrder.bookingDate && {
          bookingDate: formatDate(new Date(selectedOrder.bookingDate)),
        }),
      });
  }, selectedOrder);

  function handleTitle(e) {
    e.persist();
    setOrderDetail((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  }

  function handleDate(e) {
    e.persist();
    setOrderDetail((prevState) => ({
      ...prevState,
      bookingDate: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (mode === Mode.View) {
      return;
    }

    dispatch(
      orderActions.update(
        id,
        {
          title: orderDetail.title,
          bookingDate: new Date(orderDetail.bookingDate).valueOf(),
        },
        { pathname: "/orders" }
      )
    );
  }

  return (
    <div className="col-lg-8">
      <h2>Order Detail</h2>
      {orderDetail && (
        <form name="form" onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Title
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="title"
                readOnly={readOnly}
                value={orderDetail.title}
                onChange={handleTitle}
                className={
                  "form-control" + (!orderDetail.title ? " is-invalid" : "")
                }
              />
              {!orderDetail.title && (
                <div className="invalid-feedback">Title is required</div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Booking Date</label>
            <div className="col-sm-10">
              <input
                type="date"
                name="bookingDate"
                readOnly={readOnly}
                value={orderDetail.bookingDate}
                onChange={handleDate}
                className={
                  "form-control" +
                  (!orderDetail?.bookingDate ? " is-invalid" : "")
                }
              />
              {!orderDetail?.bookingDate && (
                <div className="invalid-feedback">Booking is required</div>
              )}
            </div>
          </div>
          {orderDetail.address && (
            <div className="form-group row">
              <label htmlFor="address" className="col-sm-2 col-form-label">
                Address
              </label>
              <div className="col-sm-10">
                <Address
                  className="form-control-plaintext"
                  address={orderDetail.address}
                />
              </div>
            </div>
          )}
          {orderDetail.customer && (
            <div className="form-group row">
              <label htmlFor="customer" className="col-sm-2 col-form-label">
                Customer
              </label>
              <div className="col-sm-10">
                <Customer
                  className="form-control-plaintext"
                  customer={orderDetail.customer}
                />
              </div>
            </div>
          )}
          {mode === Mode.Edit && (
            <div className="form-group row">
              <button className="btn btn-primary">update</button>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export { OrderDetailPage };
