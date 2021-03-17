import { orderConstants } from "../_constants";
import { orderService } from "../_services";
import { alertActions } from ".";
import { history } from "../_helpers";

export const orderActions = {
  getAll,
  getById,
  update,
};

function getAll() {
  return (dispatch) => {
    dispatch(request());

    orderService.getAll().then(
      (orders) => dispatch(success(orders)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: orderConstants.GETALL_REQUEST };
  }
  function success(orders) {
    return { type: orderConstants.GETALL_SUCCESS, orders };
  }
  function failure(error) {
    return { type: orderConstants.GETALL_FAILURE, error };
  }
}

function getById(id) {
  return (dispatch) => {
    dispatch(request());
    orderService.getById(id).then(
      (order) => dispatch(success(order)),
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: orderConstants.GET_BY_ID_REQUEST };
  }
  function success(order) {
    return { type: orderConstants.GET_BY_ID_SUCCESS, order };
  }
  function failure(error) {
    return { type: orderConstants.GET_BY_ID_FAILURE, error };
  }
}

function update(id, order, from) {
  return (dispatch) => {
    dispatch(request());
    orderService.update(id, order).then(
      (order) => {
        dispatch(success(order));
        history.push(from);
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: orderConstants.UPDATE_REQUEST };
  }
  function success(order) {
    return { type: orderConstants.UPDATE_SUCCESS, order };
  }
  function failure(error) {
    return { type: orderConstants.UPDATE_FAILURE, error };
  }
}
