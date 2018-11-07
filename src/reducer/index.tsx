interface IAction {
  type: string;
  response?: {};
}

const initialState = {
  attempt: 0,
  currentUser: null,
  isLoading: false,
  userError: null
}


const login = (state = initialState, action: IAction): any => {
  switch (action.type) {
    case 'LOAD_LOGIN_USER':
      return {
        ...state,
        isLoading: true
      };
    case 'LOAD_LOGIN_USER_SUCCESS':
      return {
        ...state,
        currentUser: action.response,
        isLoading: false
      };
    case 'LOAD_LOGIN_USER_FAIL':
      return {
        ...state,
        attempt: state.attempt + 1,
        isLoading: false,
        userError: action.response,
      };
    default:
      return state;
  }
}

export default login;