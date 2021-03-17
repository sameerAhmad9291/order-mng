import { userConstants } from '../_constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GET_BY_ID_REQUEST:
            return {
              loading: true,
              user: null,
            };
          case userConstants.GET_BY_ID_SUCCESS:
            return {
                user: action.user,
              loading: false,
            };
          case userConstants.GET_BY_ID_FAILURE:
            return {
              error: action.error,
              loading: false,
              user: null,
            };
        default:
            return state
    }
}