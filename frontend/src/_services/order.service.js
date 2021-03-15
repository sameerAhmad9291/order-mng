import config from "config";
import { authHeader } from "../_helpers";
import axios from 'axios';


export const orderService = {
  getAll,
  getById,
  update,
};

function getAll() {
  return axios.get(`${config.apiUrl}/orders`).then(res=>res.data);
}

function getById(id) {
  return axios.get(`${config.apiUrl}/orders/${id}`).then(res=>res.data);
}

function update(orderDetail) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(orderDetail),
  };

  return fetch(`${config.apiUrl}/orders/${user.id}`, requestOptions);
}
