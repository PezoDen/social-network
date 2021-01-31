import {AuthType} from "./entities";
import {authAPI} from "../API/api";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";


const initialState: AuthType = {
  userId: -1,
  login: '',
  email: '',
  isAuth: false
  // isFetching: false
}
const authReducer = (state = initialState, action: UserActionType): AuthType => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.data,
        isAuth: true

      }

    default:
      return state;
  }
}
export type UserActionType = ReturnType<typeof SetAuthUserData>

export const SetAuthUserData = (userId: number, email: string, login: string) => {
  return {type: "SET_USER_DATA", data: {userId, email, login}} as const
}
export const getAuthUserData = ():ThunkAction<void, RootState, unknown, UserActionType> => (dispatch) => {
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data
      dispatch(SetAuthUserData(id, email, login))
    }
  })
}

export default authReducer;
