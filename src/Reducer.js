export const initialState = {
    type: "",
    sid: "",
    email: "",
    queries: ""
  }
  
  const StateReducer = (reducerState, action) => {
    console.log("state ::", reducerState)
    switch (action.type) {
      case "USER_LOGIN":
        console.log("user_login")
        return {
          ...reducerState,
          type: action.type,
          sid: action.sid
        }
      default:
        return reducerState
    }
  }
  export default StateReducer;