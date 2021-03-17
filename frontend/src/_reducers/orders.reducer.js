import { orderConstants } from "../_constants";

export function orders(state = { items: [] }, action) {
  switch (action.type) {
    case orderConstants.GETALL_REQUEST:
      return {
        loading: true,
        items: [],
      };
    case orderConstants.GETALL_SUCCESS:
      return {
        items: action.orders,
        loading: false,
      };
    case orderConstants.GETALL_FAILURE:
      return {
        error: action.error,
        loading: false,
        items: [],
      };
    case orderConstants.GET_BY_ID_REQUEST:
      return {
        loading: true,
        selectedOrder: null,
      };
    case orderConstants.GET_BY_ID_SUCCESS:
      return {
        selectedOrder: action.order,
        loading: false,
      };
    case orderConstants.GET_BY_ID_FAILURE:
      return {
        error: action.error,
        loading: false,
        selectedOrder: null,
      };
    case orderConstants.UPDATE_REQUEST:
      return {
        loading: true,
        selectedOrder: null,
      };
    case orderConstants.UPDATE_SUCCESS:
      return {
        selectedOrder: action.order,
        loading: false,
      };
    case orderConstants.UPDATE_FAILURE:
      return {
        error: action.error,
        loading: false,
        selectedOrder: null,
      };
    default:
      return state;
  }
}
