// import fetch from 'cross-fetch';
import { data } from '../mock/data';

export const loginUser = (params: any) => {
  return (dispatch: any) => {
    dispatch(loginIsLoading())
    const user = data.filter((userObj: IUser) => userObj.username === params.username);
    if (user.length > 0) {
      if (user[0].password === params.password) {
        dispatch(loginSuccess(user[0]));
      } else {
        dispatch(loginFail({ statusCode: 400, message: 'Bad request' }));
      }
    } else {
      dispatch(loginFail({ statusCode: 404, message: 'User not found' }));
    }

  }
}
interface IUser {
  username: string;
  password: string;
  role: string;
  firstname: string;
  lastname: string;
}
const loginIsLoading = () => {
  return {
    type: 'LOAD_LOGIN_USER'
  }
}

const loginSuccess = (response: any) => {
  return {
    response,
    type: 'LOAD_LOGIN_USER_SUCCESS'
  }
}

const loginFail = (response: any) => {
  return {
    response,
    type: 'LOAD_LOGIN_USER_FAIL'
  }
}