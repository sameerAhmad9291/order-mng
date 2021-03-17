import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { orderActions, userActions } from "../_actions";

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

function OrderItem(props) {
  const order = props.order;
  return (
    <tr>
      <td>{order.title} </td>
      <td>
        {order.bookingDate != undefined
          ? new Date(order.bookingDate).toLocaleString()
          : ""}
      </td>
      <td>
        <Address address={order.address} />
      </td>
      <td>
        <Customer customer={order.customer} />
      </td>
      <td>
        {order.uid && (
          <Link to={`/orders/${order.uid}`} className="btn btn-info">
            View
          </Link>
        )}
      </td>
      <td>
        {order.uid && (
          <Link
            to={{ pathname: `/orders/${order.uid}`, state: { mode: "Edit" } }}
            className="btn btn-success"
          >
            Edit
          </Link>
        )}
      </td>
    </tr>
  );
}

function OrderListPage() {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderActions.getAll());
  }, []);

  return (
    <div className="col-lg-12">
      <h3>Orders</h3>
      {orders.loading && <em>Loading users...</em>}
      {orders.error && (
        <span className="text-danger">ERROR: {orders.error}</span>
      )}
      {orders && (
        <table className="table table-bordered">
          <thead style={{ backgroundColor: "lightgrey" }}>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Booking Date</th>
              <th scope="col">Address</th>
              <th scope="col">Customer</th>
              <th scope="col" colSpan="2"></th>
            </tr>
          </thead>
          <tbody>
            {orders.items.map((order, index) => (
              <OrderItem key={index} order={order} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export { OrderListPage };
