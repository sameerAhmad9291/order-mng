import config from "config";
import { authHeader } from "../_helpers";
import axios from "axios";

export const orderService = {
  getAll,
  getById,
  update,
};

function getAll() {
  return axios
    .get(`${config.apiUrl}/orders`, { headers: { ...authHeader() } })
    .then((res) => res.data);
}

function getById(id) {
  return axios
    .get(`${config.apiUrl}/orders/${id}`, { headers: { ...authHeader() } })
    .then((res) => res.data);
}

function update(orderId, orderDetail) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader() },
    body: JSON.stringify(orderDetail),
  };

  return fetch(`${config.apiUrl}/orders/${orderId}`, requestOptions);
}
